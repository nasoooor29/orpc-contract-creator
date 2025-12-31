import type { JSONSchema, OpenAPISpec, ReferenceObject } from "./types";
import { isReferenceObject } from "./openapi-parser";

export interface TSGeneratorOptions {
  allOutputFieldsRequired?: boolean;
}

/**
 * Generate TypeScript interfaces from a collection of JSON schemas
 */
export async function generateTSInterfaces(
  schemas: Map<string, JSONSchema>,
  spec: OpenAPISpec,
  options: TSGeneratorOptions = {}
): Promise<string> {
  // Collect all schemas including component schemas
  const allSchemas = new Map<string, JSONSchema>();

  // Add component schemas first
  if (spec.components?.schemas) {
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      if (!isReferenceObject(schema)) {
        allSchemas.set(name, schema);
      }
    }
  }

  // Add parsed schemas (these may override or add new ones)
  for (const [name, schema] of schemas) {
    allSchemas.set(name, schema);
  }

  if (allSchemas.size === 0) {
    return `// No schemas found\nexport {};\n`;
  }

  return generateTSFromMap(allSchemas, options);
}

/**
 * Topologically sort schemas based on dependencies
 */
function topologicalSort(schemas: Map<string, JSONSchema>): string[] {
  const visited = new Set<string>();
  const result: string[] = [];
  const visiting = new Set<string>();

  function getDependencies(schema: JSONSchema | ReferenceObject): string[] {
    const deps: string[] = [];

    if (isReferenceObject(schema)) {
      const refName = schema.$ref.split("/").pop() ?? "";
      if (schemas.has(refName)) {
        deps.push(refName);
      }
      return deps;
    }

    if (schema.properties) {
      for (const propSchema of Object.values(schema.properties)) {
        deps.push(...getDependencies(propSchema));
      }
    }

    if (schema.items) {
      deps.push(...getDependencies(schema.items as JSONSchema | ReferenceObject));
    }

    if (schema.allOf) {
      for (const s of schema.allOf) {
        deps.push(...getDependencies(s));
      }
    }

    if (schema.anyOf) {
      for (const s of schema.anyOf) {
        deps.push(...getDependencies(s));
      }
    }

    if (schema.oneOf) {
      for (const s of schema.oneOf) {
        deps.push(...getDependencies(s));
      }
    }

    if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
      deps.push(...getDependencies(schema.additionalProperties as JSONSchema | ReferenceObject));
    }

    return deps;
  }

  function visit(name: string) {
    if (visited.has(name)) return;
    if (visiting.has(name)) return; // Circular dependency

    visiting.add(name);
    const schema = schemas.get(name);
    if (schema) {
      const deps = getDependencies(schema);
      for (const dep of deps) {
        visit(dep);
      }
    }
    visiting.delete(name);
    visited.add(name);
    result.push(name);
  }

  for (const name of schemas.keys()) {
    visit(name);
  }

  return result;
}

function generateTSFromMap(schemas: Map<string, JSONSchema>, options: TSGeneratorOptions = {}): string {
  const lines: string[] = [
    `// Auto-generated TypeScript interfaces from OpenAPI spec`,
    `// Do not edit manually`,
    "",
  ];

  // Sort schemas topologically to handle dependencies
  const sortedNames = topologicalSort(schemas);

  // Generate interfaces in dependency order
  for (const name of sortedNames) {
    const schema = schemas.get(name);
    if (!schema) continue;

    const safeName = sanitizeName(name);
    const tsType = jsonSchemaToTS(schema, schemas, options, name);
    
    // Check if it's an object type (interface) or a type alias
    if (schema.type === "object" && schema.properties) {
      lines.push(`export interface ${safeName} ${tsType}`);
    } else {
      lines.push(`export type ${safeName} = ${tsType};`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function sanitizeName(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^(\d)/, "_$1");
}

function jsonSchemaToTS(
  schema: JSONSchema | ReferenceObject | undefined,
  allSchemas: Map<string, JSONSchema>,
  options: TSGeneratorOptions = {},
  currentSchemaName?: string,
  depth = 0
): string {
  const { allOutputFieldsRequired = false } = options;

  if (!schema) return "unknown";

  if (isReferenceObject(schema)) {
    const refName = schema.$ref.split("/").pop() ?? "";
    return sanitizeName(refName);
  }

  // Handle nullable
  const wrapNullable = (ts: string) =>
    schema.nullable ? `(${ts}) | null` : ts;

  // Handle allOf (intersection)
  if (schema.allOf && schema.allOf.length > 0) {
    if (schema.allOf.length === 1) {
      return jsonSchemaToTS(schema.allOf[0], allSchemas, options, currentSchemaName, depth);
    }
    
    // Merge all properties for allOf
    const mergedProps: Record<string, JSONSchema | ReferenceObject> = {};
    const mergedRequired: string[] = [];

    for (const subSchema of schema.allOf) {
      if (isReferenceObject(subSchema)) {
        const refName = subSchema.$ref.split("/").pop() ?? "";
        const resolved = allSchemas.get(refName);
        if (resolved?.properties) {
          Object.assign(mergedProps, resolved.properties);
          if (resolved.required) {
            mergedRequired.push(...resolved.required);
          }
        }
      } else if (subSchema.properties) {
        Object.assign(mergedProps, subSchema.properties);
        if (subSchema.required) {
          mergedRequired.push(...subSchema.required);
        }
      }
    }

    if (Object.keys(mergedProps).length > 0) {
      const props: string[] = [];
      for (const [key, propSchema] of Object.entries(mergedProps)) {
        const isRequired = allOutputFieldsRequired || mergedRequired.includes(key);
        const propType = jsonSchemaToTS(propSchema, allSchemas, options, currentSchemaName, depth + 1);
        const optionalMark = isRequired ? "" : "?";
        props.push(`  ${sanitizePropertyName(key)}${optionalMark}: ${propType};`);
      }
      return wrapNullable(`{\n${props.join("\n")}\n}`);
    }

    const tsTypes = schema.allOf.map((s) => jsonSchemaToTS(s, allSchemas, options, currentSchemaName, depth));
    return tsTypes.join(" & ");
  }

  // Handle oneOf/anyOf (union)
  if (schema.oneOf && schema.oneOf.length > 0) {
    const tsTypes = schema.oneOf.map((s) => jsonSchemaToTS(s, allSchemas, options, currentSchemaName, depth));
    if (tsTypes.length === 1) return tsTypes[0]!;
    return tsTypes.join(" | ");
  }

  if (schema.anyOf && schema.anyOf.length > 0) {
    const tsTypes = schema.anyOf.map((s) => jsonSchemaToTS(s, allSchemas, options, currentSchemaName, depth));
    if (tsTypes.length === 1) return tsTypes[0]!;
    return tsTypes.join(" | ");
  }

  // Handle enum
  if (schema.enum) {
    const values = schema.enum.map((v) =>
      typeof v === "string" ? `"${v}"` : String(v)
    );
    return values.join(" | ");
  }

  // Handle type
  const type = Array.isArray(schema.type) ? schema.type[0] : schema.type;

  switch (type) {
    case "string":
      return wrapNullable("string");

    case "number":
    case "integer":
      return wrapNullable("number");

    case "boolean":
      return wrapNullable("boolean");

    case "array": {
      const itemType = schema.items
        ? jsonSchemaToTS(schema.items as JSONSchema, allSchemas, options, currentSchemaName, depth + 1)
        : "unknown";
      return wrapNullable(`${itemType}[]`);
    }

    case "object": {
      if (schema.properties) {
        const props: string[] = [];
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          const isRequired = allOutputFieldsRequired || (schema.required?.includes(key) ?? false);
          const propType = jsonSchemaToTS(propSchema, allSchemas, options, currentSchemaName, depth + 1);
          const optionalMark = isRequired ? "" : "?";
          props.push(`  ${sanitizePropertyName(key)}${optionalMark}: ${propType};`);
        }

        let result = `{\n${props.join("\n")}\n}`;

        // Handle additional properties
        if (schema.additionalProperties === true) {
          result = `{\n${props.join("\n")}\n  [key: string]: unknown;\n}`;
        } else if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
          const valueType = jsonSchemaToTS(
            schema.additionalProperties as JSONSchema,
            allSchemas,
            options,
            currentSchemaName,
            depth + 1
          );
          result = `{\n${props.join("\n")}\n  [key: string]: ${valueType};\n}`;
        }

        return wrapNullable(result);
      }

      if (schema.additionalProperties) {
        if (typeof schema.additionalProperties === "boolean") {
          return wrapNullable("Record<string, unknown>");
        }
        const valueType = jsonSchemaToTS(
          schema.additionalProperties as JSONSchema,
          allSchemas,
          options,
          currentSchemaName,
          depth + 1
        );
        return wrapNullable(`Record<string, ${valueType}>`);
      }

      return wrapNullable("Record<string, unknown>");
    }

    case "null":
      return "null";

    case "file":
      return "File | Blob";

    default:
      return wrapNullable("unknown");
  }
}

function sanitizePropertyName(name: string): string {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
    return name;
  }
  return `"${name}"`;
}
