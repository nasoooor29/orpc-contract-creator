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

export interface ContractGeneratorOptions {
  allInputFieldsRequired?: boolean;
  allOutputFieldsRequired?: boolean;
}

/**
 * Generate the oRPC contract file content using detailed input/output structure
 */
export function generateContract(
  endpoints: ParsedEndpoint[],
  schemas: Map<string, JSONSchema>,
  specName: string,
  options: ContractGeneratorOptions = {}
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
    const endpointCode = generateEndpointContract(endpoint, schemas, options);
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
  schemas: Map<string, JSONSchema>,
  options: ContractGeneratorOptions = {}
): string {
  const parts: string[] = [];
  
  // Route definition with detailed mode
  const routePath = endpoint.path.replace(/{([^}]+)}/g, "{$1}");
  
  // Check if output needs detailed structure (multiple responses or no body)
  const successResponses = endpoint.successResponses.filter((r) => r.schemaName);
  const needsDetailedOutput = successResponses.length !== 1;
  
  parts.push(`oc`);
  if (needsDetailedOutput) {
    parts.push(`.route({
    method: "${endpoint.method}",
    path: "${routePath}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })`);
  } else {
    parts.push(`.route({
    method: "${endpoint.method}",
    path: "${routePath}",
    inputStructure: "detailed"
  })`);
  }

  // Input schema (detailed mode: params, query, body, headers)
  const inputSchema = generateDetailedInputSchema(endpoint, schemas, options);
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

function generateDetailedInputSchema(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>,
  options: ContractGeneratorOptions = {}
): string | null {
  const { allInputFieldsRequired = false } = options;
  const inputParts: string[] = [];

  // Params (path parameters)
  if (endpoint.pathParams.length > 0) {
    const paramProps: string[] = [];
    for (const param of endpoint.pathParams) {
      const zodType = getZodTypeForParam(param, true); // coerce for path params
      paramProps.push(`${sanitizePropertyName(param.name)}: ${zodType}`);
    }
    inputParts.push(`params: z.object({\n      ${paramProps.join(",\n      ")}\n    })`);
  }

  // Query parameters
  if (endpoint.queryParams.length > 0) {
    const queryProps: string[] = [];
    for (const param of endpoint.queryParams) {
      let zodType = getZodTypeForParam(param, false);
      // Only add .optional() if not in allInputFieldsRequired mode and param is not required
      if (!allInputFieldsRequired && !param.required) {
        zodType += ".optional()";
      }
      queryProps.push(`${sanitizePropertyName(param.name)}: ${zodType}`);
    }
    inputParts.push(`query: z.object({\n      ${queryProps.join(",\n      ")}\n    })`);
  }

  // Body (request body)
  if (endpoint.requestBody) {
    const schemaRef = getSchemaReference(endpoint.requestBody.schemaName, schemas);
    // Only add .optional() if not in allInputFieldsRequired mode and body is not required
    if (!allInputFieldsRequired && !endpoint.requestBody.required) {
      inputParts.push(`body: ${schemaRef}.optional()`);
    } else {
      inputParts.push(`body: ${schemaRef}`);
    }
  }

  if (inputParts.length === 0) {
    return null;
  }

  return `z.object({\n    ${inputParts.join(",\n    ")}\n  })`;
}

function getZodTypeForParam(param: ParsedParameter, coerce: boolean): string {
  const { type, format } = param;

  switch (type) {
    case "integer":
      return coerce ? "z.coerce.number().int()" : "z.number().int()";
    case "number":
      return coerce ? "z.coerce.number()" : "z.number()";
    case "boolean":
      return coerce ? "z.coerce.boolean()" : "z.boolean()";
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

/**
 * Generate output schema - simplified for single response, detailed for multiple
 */
function generateOutputSchema(
  endpoint: ParsedEndpoint,
  schemas: Map<string, JSONSchema>
): string | null {
  const successResponses = endpoint.successResponses.filter((r) => r.schemaName);

  if (successResponses.length === 0) {
    // Even without a body, we might want to return status (detailed mode)
    if (endpoint.successResponses.length > 0) {
      const status = endpoint.successResponses[0]?.statusCode || 200;
      return `z.object({
    status: z.literal(${status}),
    body: z.undefined()
  })`;
    }
    return null;
  }

  // Single response - return simplified output (just the body schema)
  if (successResponses.length === 1) {
    const response = successResponses[0]!;
    const bodySchema = getSchemaReference(response.schemaName!, schemas);
    return bodySchema;
  }

  // Multiple success responses - create a union with status discriminator (detailed mode)
  const responseSchemas = successResponses.map((r) => {
    const bodySchema = getSchemaReference(r.schemaName!, schemas);
    return `z.object({
      status: z.literal(${r.statusCode}),
      body: ${bodySchema}
    })`;
  });
  
  return `z.union([${responseSchemas.join(", ")}])`;
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
