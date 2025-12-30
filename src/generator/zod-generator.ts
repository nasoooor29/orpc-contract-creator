import type { JSONSchema, OpenAPISpec, ReferenceObject } from "./types";
import { isReferenceObject } from "./openapi-parser";

export interface ZodGeneratorOptions {
  allOutputFieldsRequired?: boolean;
}

/**
 * Generate Zod schemas from a collection of JSON schemas
 * Uses a custom generator for full control over schema naming
 */
export async function generateZodSchemas(
  schemas: Map<string, JSONSchema>,
  spec: OpenAPISpec,
  options: ZodGeneratorOptions = {}
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
    return `import { z } from "zod";\n\n// No schemas found\nexport {};\n`;
  }

  return generateZodSchemasFromMap(allSchemas, options);
}

/**
 * Topologically sort schemas based on dependencies
 */
function topologicalSort(schemas: Map<string, JSONSchema>): string[] {
  const visited = new Set<string>();
  const result: string[] = [];
  const visiting = new Set<string>(); // For cycle detection

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
    if (visiting.has(name)) {
      // Circular dependency - we'll handle this with z.lazy()
      return;
    }

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

/**
 * Check if a schema has circular references
 */
function hasCircularRef(
  schema: JSONSchema | ReferenceObject,
  targetName: string,
  allSchemas: Map<string, JSONSchema>,
  visited = new Set<string>()
): boolean {
  if (isReferenceObject(schema)) {
    const refName = schema.$ref.split("/").pop() ?? "";
    if (refName === targetName) return true;
    if (visited.has(refName)) return false;
    visited.add(refName);
    const resolved = allSchemas.get(refName);
    if (resolved) {
      return hasCircularRef(resolved, targetName, allSchemas, visited);
    }
    return false;
  }

  if (schema.properties) {
    for (const propSchema of Object.values(schema.properties)) {
      if (hasCircularRef(propSchema, targetName, allSchemas, new Set(visited))) {
        return true;
      }
    }
  }

  if (schema.items) {
    if (hasCircularRef(schema.items as JSONSchema | ReferenceObject, targetName, allSchemas, new Set(visited))) {
      return true;
    }
  }

  if (schema.allOf) {
    for (const s of schema.allOf) {
      if (hasCircularRef(s, targetName, allSchemas, new Set(visited))) {
        return true;
      }
    }
  }

  if (schema.anyOf) {
    for (const s of schema.anyOf) {
      if (hasCircularRef(s, targetName, allSchemas, new Set(visited))) {
        return true;
      }
    }
  }

  if (schema.oneOf) {
    for (const s of schema.oneOf) {
      if (hasCircularRef(s, targetName, allSchemas, new Set(visited))) {
        return true;
      }
    }
  }

  return false;
}

function generateZodSchemasFromMap(schemas: Map<string, JSONSchema>, options: ZodGeneratorOptions = {}): string {
  const lines: string[] = [
    `import { z } from "zod";`,
    "",
  ];

  // Sort schemas topologically to handle dependencies
  const sortedNames = topologicalSort(schemas);

  // Track which schemas have circular refs and need z.lazy()
  const circularSchemas = new Set<string>();
  for (const name of sortedNames) {
    const schema = schemas.get(name);
    if (schema && hasCircularRef(schema, name, schemas)) {
      circularSchemas.add(name);
    }
  }

  // Generate schemas in dependency order
  for (const name of sortedNames) {
    const schema = schemas.get(name);
    if (!schema) continue;

    const safeName = sanitizeName(name);
    const isCircular = circularSchemas.has(name);

    if (isCircular) {
      // Use z.lazy for circular schemas
      lines.push(`export const ${safeName}Schema: z.ZodType<any> = z.lazy(() => ${jsonSchemaToZod(schema, schemas, options, name)});`);
    } else {
      const zodSchema = jsonSchemaToZod(schema, schemas, options, name);
      lines.push(`export const ${safeName}Schema = ${zodSchema};`);
    }
    lines.push(`export type ${safeName} = z.infer<typeof ${safeName}Schema>;`);
    lines.push("");
  }

  return lines.join("\n");
}

function sanitizeName(name: string): string {
  // Ensure valid TypeScript identifier
  return name
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^(\d)/, "_$1");
}

function jsonSchemaToZod(
  schema: JSONSchema | ReferenceObject | undefined,
  allSchemas: Map<string, JSONSchema>,
  options: ZodGeneratorOptions = {},
  currentSchemaName?: string,
  depth = 0
): string {
  const { allOutputFieldsRequired = false } = options;
  
  if (!schema) return "z.unknown()";

  if (isReferenceObject(schema)) {
    const refName = schema.$ref.split("/").pop() ?? "";
    return `${sanitizeName(refName)}Schema`;
  }

  // Handle nullable
  const wrapNullable = (zod: string) =>
    schema.nullable ? `${zod}.nullable()` : zod;

  // Handle allOf (intersection)
  if (schema.allOf && schema.allOf.length > 0) {
    if (schema.allOf.length === 1) {
      return jsonSchemaToZod(schema.allOf[0], allSchemas, options, currentSchemaName, depth);
    }
    // For allOf with object schemas, merge them
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
        let propZod = jsonSchemaToZod(propSchema, allSchemas, options, currentSchemaName, depth + 1);
        if (!isRequired) propZod += ".optional()";
        props.push(`  ${sanitizePropertyName(key)}: ${propZod}`);
      }
      return wrapNullable(`z.object({\n${props.join(",\n")}\n})`);
    }
    
    const zodSchemas = schema.allOf.map((s) => jsonSchemaToZod(s, allSchemas, options, currentSchemaName, depth));
    return zodSchemas.reduce((acc, s) => `${acc}.and(${s})`);
  }

  // Handle oneOf/anyOf (union)
  if (schema.oneOf && schema.oneOf.length > 0) {
    const zodSchemas = schema.oneOf.map((s) => jsonSchemaToZod(s, allSchemas, options, currentSchemaName, depth));
    if (zodSchemas.length === 1) return zodSchemas[0]!;
    return `z.union([${zodSchemas.join(", ")}])`;
  }

  if (schema.anyOf && schema.anyOf.length > 0) {
    const zodSchemas = schema.anyOf.map((s) => jsonSchemaToZod(s, allSchemas, options, currentSchemaName, depth));
    if (zodSchemas.length === 1) return zodSchemas[0]!;
    return `z.union([${zodSchemas.join(", ")}])`;
  }

  // Handle enum
  if (schema.enum) {
    const values = schema.enum.map((v) =>
      typeof v === "string" ? `"${v}"` : String(v)
    );
    if (values.length === 1) {
      return `z.literal(${values[0]})`;
    }
    // Check if all values are strings
    const allStrings = schema.enum.every((v) => typeof v === "string");
    if (allStrings) {
      return `z.enum([${values.join(", ")}])`;
    }
    // Mixed types - use union of literals
    return `z.union([${values.map((v) => `z.literal(${v})`).join(", ")}])`;
  }

  // Handle type
  const type = Array.isArray(schema.type) ? schema.type[0] : schema.type;

  switch (type) {
    case "string": {
      let zod = "z.string()";
      if (schema.format === "date-time") zod = "z.string().datetime()";
      else if (schema.format === "date") zod = "z.string().date()";
      else if (schema.format === "email") zod = "z.string().email()";
      else if (schema.format === "uri" || schema.format === "url") zod = "z.string().url()";
      else if (schema.format === "uuid") zod = "z.string().uuid()";
      else if (schema.format === "binary") zod = "z.any()"; // File upload
      if (schema.minLength) zod += `.min(${schema.minLength})`;
      if (schema.maxLength) zod += `.max(${schema.maxLength})`;
      if (schema.pattern) {
        // Escape pattern for use in regex literal
        const escapedPattern = schema.pattern.replace(/\//g, "\\/");
        zod += `.regex(/${escapedPattern}/)`;
      }
      return wrapNullable(zod);
    }

    case "number":
    case "integer": {
      let zod = "z.number()";
      if (type === "integer") zod += ".int()";
      if (schema.minimum !== undefined) zod += `.min(${schema.minimum})`;
      if (schema.maximum !== undefined) zod += `.max(${schema.maximum})`;
      return wrapNullable(zod);
    }

    case "boolean":
      return wrapNullable("z.boolean()");

    case "array": {
      const itemSchema = schema.items
        ? jsonSchemaToZod(schema.items as JSONSchema, allSchemas, options, currentSchemaName, depth + 1)
        : "z.unknown()";
      return wrapNullable(`z.array(${itemSchema})`);
    }

    case "object": {
      if (schema.properties) {
        const props: string[] = [];
        for (const [key, propSchema] of Object.entries(schema.properties)) {
          const isRequired = allOutputFieldsRequired || (schema.required?.includes(key) ?? false);
          let propZod = jsonSchemaToZod(propSchema, allSchemas, options, currentSchemaName, depth + 1);
          if (!isRequired) propZod += ".optional()";
          props.push(`  ${sanitizePropertyName(key)}: ${propZod}`);
        }

        let zod = `z.object({\n${props.join(",\n")}\n})`;

        if (schema.additionalProperties === true) {
          zod += ".passthrough()";
        } else if (
          schema.additionalProperties &&
          typeof schema.additionalProperties === "object"
        ) {
          zod += ".passthrough()";
        }

        return wrapNullable(zod);
      }

      if (schema.additionalProperties) {
        if (typeof schema.additionalProperties === "boolean") {
          return wrapNullable("z.record(z.string(), z.unknown())");
        }
        const valueSchema = jsonSchemaToZod(
          schema.additionalProperties as JSONSchema,
          allSchemas,
          options,
          currentSchemaName,
          depth + 1
        );
        return wrapNullable(`z.record(z.string(), ${valueSchema})`);
      }

      return wrapNullable("z.object({}).passthrough()");
    }

    case "null":
      return "z.null()";

    case "file":
      // File type (used in OpenAPI for file uploads)
      return "z.any()";

    default:
      return wrapNullable("z.unknown()");
  }
}

function sanitizePropertyName(name: string): string {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
    return name;
  }
  return `"${name}"`;
}
