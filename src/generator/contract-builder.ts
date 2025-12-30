import type { ParsedEndpoint, ParsedParameter, JSONSchema, ReferenceObject } from "./types";
import { HTTP_TO_ORPC_ERROR } from "./types";
import { isReferenceObject, getRefName } from "./openapi-parser";

function sanitizeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^(\d)/, "_$1");
}

function toCamelCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter(w => w.length > 0)
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

/**
 * Generate the oRPC contract file content
 */
export function generateContract(
  endpoints: ParsedEndpoint[],
  schemas: Map<string, JSONSchema>,
  specName: string
): string {
  const lines: string[] = [
    `import { oc } from "@orpc/contract";`,
    `import { z } from "zod";`,
    `import * as zodTypes from "./zod-types.gen";`,
    "",
  ];

  // Generate each endpoint as a contract
  const endpointDeclarations: string[] = [];
  const contractStructure: Map<string, string[]> = new Map();

  for (const endpoint of endpoints) {
    const endpointCode = generateEndpointContract(endpoint, schemas);
    const varName = toCamelCase(endpoint.operationId);
    
    endpointDeclarations.push(`const ${varName} = ${endpointCode};`);
    endpointDeclarations.push("");

    // Group by first tag or "default"
    const tag = endpoint.tags[0] || "default";
    const tagKey = toCamelCase(tag);
    
    if (!contractStructure.has(tagKey)) {
      contractStructure.set(tagKey, []);
    }
    contractStructure.get(tagKey)!.push(varName);
  }

  lines.push(...endpointDeclarations);

  // Generate the contract object
  lines.push("export const contract = oc.router({");
  
  for (const [tag, varNames] of contractStructure) {
    if (varNames.length === 1 && tag === "default") {
      // If only one endpoint in default, add directly
      lines.push(`  ${varNames[0]},`);
    } else {
      lines.push(`  ${tag}: {`);
      for (const varName of varNames) {
        lines.push(`    ${varName},`);
      }
      lines.push(`  },`);
    }
  }
  
  lines.push("});");
  lines.push("");

  return lines.join("\n");
}

function generateEndpointContract(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>
): string {
  const parts: string[] = [];
  
  // Route definition
  const routePath = endpoint.path.replace(/{([^}]+)}/g, "{$1}");
  parts.push(`oc`);
  parts.push(`.route({ method: "${endpoint.method}", path: "${routePath}" })`);

  // Input schema
  const inputSchema = generateInputSchema(endpoint, schemas);
  if (inputSchema) {
    parts.push(`.input(${inputSchema})`);
  }

  // Output schema
  const outputSchema = generateOutputSchema(endpoint, schemas);
  if (outputSchema) {
    parts.push(`.output(${outputSchema})`);
  }

  // Error schemas
  const errorSchema = generateErrorSchema(endpoint, schemas);
  if (errorSchema) {
    parts.push(`.errors(${errorSchema})`);
  }

  return parts.join("\n  ");
}

function generateInputSchema(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>
): string | null {
  const properties: string[] = [];

  // Add path parameters
  for (const param of endpoint.pathParams) {
    const zodType = getZodTypeForParam(param);
    properties.push(`${sanitizePropertyName(param.name)}: ${zodType}`);
  }

  // Add query parameters
  for (const param of endpoint.queryParams) {
    let zodType = getZodTypeForParam(param);
    if (!param.required) {
      zodType += ".optional()";
    }
    properties.push(`${sanitizePropertyName(param.name)}: ${zodType}`);
  }

  // Add request body
  if (endpoint.requestBody) {
    const schemaRef = getSchemaReference(endpoint.requestBody.schemaName, schemas);
    if (properties.length === 0) {
      // If no other params, just use the body schema directly
      return schemaRef;
    }
    // Merge body with other params
    if (!endpoint.requestBody.required) {
      properties.push(`body: ${schemaRef}.optional()`);
    } else {
      properties.push(`body: ${schemaRef}`);
    }
  }

  if (properties.length === 0) {
    return null;
  }

  return `z.object({\n    ${properties.join(",\n    ")}\n  })`;
}

function getZodTypeForParam(param: ParsedParameter): string {
  const { type, format } = param;

  // For path params, we often need coercion
  const needsCoerce = param.required && (type === "number" || type === "integer");

  switch (type) {
    case "integer":
      return needsCoerce ? "z.coerce.number().int()" : "z.number().int()";
    case "number":
      return needsCoerce ? "z.coerce.number()" : "z.number()";
    case "boolean":
      return "z.coerce.boolean()";
    case "array":
      return "z.array(z.string())";
    case "string":
    default:
      if (format === "date-time") return "z.string().datetime()";
      if (format === "date") return "z.string().date()";
      if (format === "email") return "z.string().email()";
      if (format === "uuid") return "z.string().uuid()";
      if (format === "uri" || format === "url") return "z.string().url()";
      return "z.string()";
  }
}

/**
 * Get a reference to a schema, checking if it exists and handling inline schemas
 */
function getSchemaReference(
  schemaName: string,
  schemas: Map<string, JSONSchema>
): string {
  const sanitized = sanitizeName(schemaName);
  
  // Check if schema exists
  if (schemas.has(schemaName)) {
    const schema = schemas.get(schemaName)!;
    
    // If the schema is just an array wrapper, reference the items directly
    if (schema.type === "array" && schema.items) {
      if (isReferenceObject(schema.items)) {
        const itemRef = getRefName((schema.items as ReferenceObject).$ref);
        return `z.array(zodTypes.${sanitizeName(itemRef)}Schema)`;
      }
    }
    
    // If schema is empty object, return passthrough
    if (isEmptySchema(schema)) {
      return "z.object({}).passthrough()";
    }
    
    return `zodTypes.${sanitized}Schema`;
  }
  
  // Fallback - might be a component schema reference
  return `zodTypes.${sanitized}Schema`;
}

function isEmptySchema(schema: JSONSchema): boolean {
  return (
    !schema.type &&
    !schema.properties &&
    !schema.items &&
    !schema.allOf &&
    !schema.anyOf &&
    !schema.oneOf &&
    !schema.enum &&
    !schema.$ref
  );
}

function generateOutputSchema(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>
): string | null {
  const successResponses = endpoint.successResponses.filter((r) => r.schemaName);

  if (successResponses.length === 0) {
    return null;
  }

  if (successResponses.length === 1) {
    const response = successResponses[0]!;
    return getSchemaReference(response.schemaName!, schemas);
  }

  // Multiple success responses - create a union
  const schemaRefs = successResponses.map((r) =>
    getSchemaReference(r.schemaName!, schemas)
  );
  return `z.union([${schemaRefs.join(", ")}])`;
}

function generateErrorSchema(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>
): string | null {
  const errorResponses = endpoint.errorResponses.filter((r) => r.schemaName);

  if (errorResponses.length === 0) {
    return null;
  }

  const errorEntries: string[] = [];
  const seenErrors = new Set<string>();

  for (const response of errorResponses) {
    const orpcError = HTTP_TO_ORPC_ERROR[response.statusCode];
    if (!orpcError) continue;
    
    // Avoid duplicate error types
    if (seenErrors.has(orpcError)) continue;
    seenErrors.add(orpcError);

    const schemaRef = response.schemaName
      ? getSchemaReference(response.schemaName, schemas)
      : "z.object({ message: z.string() })";

    errorEntries.push(`  ${orpcError}: {\n    data: ${schemaRef}\n  }`);
  }

  if (errorEntries.length === 0) {
    return null;
  }

  return `{\n${errorEntries.join(",\n")}\n}`;
}

function sanitizePropertyName(name: string): string {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
    return name;
  }
  return `"${name}"`;
}
