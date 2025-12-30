import type {
  OpenAPISpec,
  PathItem,
  OperationObject,
  ParameterObject,
  RequestBodyObject,
  ResponseObject,
  ReferenceObject,
  JSONSchema,
  ParsedEndpoint,
  ParsedParameter,
  ParsedResponse,
} from "./types";

export function isReferenceObject(obj: unknown): obj is ReferenceObject {
  return typeof obj === "object" && obj !== null && "$ref" in obj;
}

export function getRefName(ref: string): string {
  // Handle refs like "#/components/schemas/Pet" -> "Pet"
  const parts = ref.split("/");
  return parts[parts.length - 1] ?? ref;
}

export function resolveRef<T>(
  spec: OpenAPISpec,
  refOrObj: T | ReferenceObject
): T {
  if (!isReferenceObject(refOrObj)) {
    return refOrObj;
  }

  const refPath = refOrObj.$ref;
  if (!refPath.startsWith("#/")) {
    throw new Error(`External refs not supported: ${refPath}`);
  }

  const pathParts = refPath.slice(2).split("/");
  let result: unknown = spec;
  for (const part of pathParts) {
    result = (result as Record<string, unknown>)[part];
    if (result === undefined) {
      throw new Error(`Could not resolve ref: ${refPath}`);
    }
  }
  return result as T;
}

function getSchemaType(
  schema: JSONSchema | ReferenceObject | undefined
): "string" | "number" | "integer" | "boolean" | "array" | "object" {
  if (!schema) return "string";
  if (isReferenceObject(schema)) return "object";

  const type = Array.isArray(schema.type) ? schema.type[0] : schema.type;
  if (
    type === "string" ||
    type === "number" ||
    type === "integer" ||
    type === "boolean" ||
    type === "array" ||
    type === "object"
  ) {
    return type;
  }
  return "string";
}

function generateSchemaName(
  operationId: string,
  context: string
): string {
  const pascalCase = operationId
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return `${pascalCase}${context}`;
}

export function parseOpenAPISpec(spec: OpenAPISpec): {
  endpoints: ParsedEndpoint[];
  schemas: Map<string, JSONSchema>;
} {
  const endpoints: ParsedEndpoint[] = [];
  const schemas = new Map<string, JSONSchema>();

  // First, collect all component schemas
  if (spec.components?.schemas) {
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      if (!isReferenceObject(schema)) {
        schemas.set(name, schema);
      }
    }
  }

  // Parse each path
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    const methods: (keyof PathItem)[] = [
      "get",
      "post",
      "put",
      "delete",
      "patch",
      "options",
      "head",
    ];

    for (const method of methods) {
      const operation = pathItem[method] as OperationObject | undefined;
      if (!operation) continue;

      const operationId =
        operation.operationId ||
        `${method}${path.replace(/[^a-zA-Z0-9]/g, "_")}`;

      const endpoint = parseOperation(
        spec,
        path,
        method.toUpperCase() as ParsedEndpoint["method"],
        operationId,
        operation,
        schemas
      );

      endpoints.push(endpoint);
    }
  }

  return { endpoints, schemas };
}

function parseOperation(
  spec: OpenAPISpec,
  path: string,
  method: ParsedEndpoint["method"],
  operationId: string,
  operation: OperationObject,
  schemas: Map<string, JSONSchema>
): ParsedEndpoint {
  const pathParams: ParsedParameter[] = [];
  const queryParams: ParsedParameter[] = [];

  // Parse parameters
  if (operation.parameters) {
    for (const paramRef of operation.parameters) {
      const param = resolveRef<ParameterObject>(spec, paramRef);
      const parsedParam = parseParameter(spec, operationId, param, schemas);

      if (param.in === "path") {
        pathParams.push(parsedParam);
      } else if (param.in === "query") {
        queryParams.push(parsedParam);
      }
    }
  }

  // Parse request body
  let requestBody: ParsedEndpoint["requestBody"] | undefined;
  if (operation.requestBody) {
    const body = resolveRef<RequestBodyObject>(spec, operation.requestBody);
    const content = body.content["application/json"] || Object.values(body.content)[0];

    if (content?.schema) {
      let schemaName: string;
      if (isReferenceObject(content.schema)) {
        schemaName = getRefName(content.schema.$ref);
      } else {
        schemaName = generateSchemaName(operationId, "Input");
        schemas.set(schemaName, content.schema);
      }

      requestBody = {
        schemaName,
        required: body.required ?? false,
      };
    }
  }

  // Parse responses
  const successResponses: ParsedResponse[] = [];
  const errorResponses: ParsedResponse[] = [];

  for (const [statusCode, responseRef] of Object.entries(operation.responses || {})) {
    const code = parseInt(statusCode, 10);
    if (isNaN(code) && statusCode !== "default") continue;

    const response = resolveRef<ResponseObject>(spec, responseRef);
    const parsedResponse = parseResponse(
      spec,
      operationId,
      isNaN(code) ? 500 : code,
      response,
      schemas
    );

    if (code >= 200 && code < 300) {
      successResponses.push(parsedResponse);
    } else {
      errorResponses.push(parsedResponse);
    }
  }

  return {
    path,
    method,
    operationId,
    tags: operation.tags || [],
    summary: operation.summary,
    pathParams,
    queryParams,
    requestBody,
    successResponses,
    errorResponses,
  };
}

function parseParameter(
  spec: OpenAPISpec,
  operationId: string,
  param: ParameterObject,
  schemas: Map<string, JSONSchema>
): ParsedParameter {
  let schemaName: string;
  let schema: JSONSchema | undefined;

  if (param.schema) {
    if (isReferenceObject(param.schema)) {
      schemaName = getRefName(param.schema.$ref);
    } else {
      schema = param.schema;
      // For simple types, we'll handle inline
      schemaName = `${operationId}_${param.name}_param`;
      schemas.set(schemaName, schema);
    }
  } else {
    schemaName = `${operationId}_${param.name}_param`;
    schemas.set(schemaName, { type: "string" });
  }

  return {
    name: param.name,
    required: param.required ?? (param.in === "path"),
    schemaName,
    type: getSchemaType(param.schema),
    format: !isReferenceObject(param.schema) ? param.schema?.format : undefined,
    description: param.description,
  };
}

function parseResponse(
  spec: OpenAPISpec,
  operationId: string,
  statusCode: number,
  response: ResponseObject,
  schemas: Map<string, JSONSchema>
): ParsedResponse {
  let schemaName: string | null = null;

  if (response.content) {
    const content =
      response.content["application/json"] ||
      Object.values(response.content)[0];

    if (content?.schema) {
      if (isReferenceObject(content.schema)) {
        schemaName = getRefName(content.schema.$ref);
      } else {
        const suffix = statusCode >= 200 && statusCode < 300 ? "Response" : `Error${statusCode}`;
        schemaName = generateSchemaName(operationId, suffix);
        schemas.set(schemaName, content.schema);
      }
    }
  }

  return {
    statusCode,
    schemaName,
    description: response.description,
  };
}
