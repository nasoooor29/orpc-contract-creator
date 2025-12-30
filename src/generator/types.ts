import type { ContractGeneratorOptions } from "./contract-builder";
import type { ZodGeneratorOptions } from "./zod-generator";

// OpenAPI types (simplified for our needs)
export interface OpenAPISpec {
    openapi: string;
    info: {
        title: string;
        version: string;
    };
    paths: Record<string, PathItem>;
    components?: {
        schemas?: Record<string, JSONSchema>;
        responses?: Record<string, ResponseObject>;
        parameters?: Record<string, ParameterObject>;
        requestBodies?: Record<string, RequestBodyObject>;
    };
}

export interface PathItem {
    get?: OperationObject;
    post?: OperationObject;
    put?: OperationObject;
    delete?: OperationObject;
    patch?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
}

export interface OperationObject {
    operationId?: string;
    summary?: string;
    description?: string;
    tags?: string[];
    parameters?: (ParameterObject | ReferenceObject)[];
    requestBody?: RequestBodyObject | ReferenceObject;
    responses: Record<string, ResponseObject | ReferenceObject>;
    deprecated?: boolean;
}

export interface ParameterObject {
    name: string;
    in: "query" | "path" | "header" | "cookie";
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    schema?: JSONSchema | ReferenceObject;
}

export interface RequestBodyObject {
    description?: string;
    content: Record<string, MediaTypeObject>;
    required?: boolean;
}

export interface ResponseObject {
    description: string;
    content?: Record<string, MediaTypeObject>;
    headers?: Record<string, HeaderObject | ReferenceObject>;
}

export interface MediaTypeObject {
    schema?: JSONSchema | ReferenceObject;
    example?: unknown;
    examples?: Record<string, unknown>;
}

export interface HeaderObject {
    description?: string;
    required?: boolean;
    schema?: JSONSchema | ReferenceObject;
}

export interface ReferenceObject {
    $ref: string;
}

export interface JSONSchema {
    type?: string | string[];
    format?: string;
    properties?: Record<string, JSONSchema | ReferenceObject>;
    required?: string[];
    items?: JSONSchema | ReferenceObject;
    enum?: (string | number | boolean | null)[];
    allOf?: (JSONSchema | ReferenceObject)[];
    anyOf?: (JSONSchema | ReferenceObject)[];
    oneOf?: (JSONSchema | ReferenceObject)[];
    $ref?: string;
    nullable?: boolean;
    description?: string;
    default?: unknown;
    minimum?: number;
    maximum?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    additionalProperties?: boolean | JSONSchema | ReferenceObject;
    title?: string;
    discriminator?: {
        propertyName: string;
        mapping?: Record<string, string>;
    };
}

// Parsed endpoint representation
export interface ParsedEndpoint {
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    operationId: string;
    tags: string[];
    summary?: string;
    pathParams: ParsedParameter[];
    queryParams: ParsedParameter[];
    requestBody?: {
        schemaName: string;
        required: boolean;
    };
    successResponses: ParsedResponse[];
    errorResponses: ParsedResponse[];
}

export interface ParsedParameter {
    name: string;
    required: boolean;
    schemaName: string;
    type: "string" | "number" | "integer" | "boolean" | "array" | "object";
    format?: string;
    description?: string;
}

export interface ParsedResponse {
    statusCode: number;
    schemaName: string | null;
    description: string;
}

// HTTP status to oRPC error code mapping
export const HTTP_TO_ORPC_ERROR: Record<number, string> = {
    400: "BAD_REQUEST",
    401: "UNAUTHORIZED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    405: "METHOD_NOT_SUPPORTED",
    408: "TIMEOUT",
    409: "CONFLICT",
    410: "NOT_FOUND",
    412: "PRECONDITION_FAILED",
    415: "UNSUPPORTED_MEDIA_TYPE",
    422: "UNPROCESSABLE_CONTENT",
    429: "TOO_MANY_REQUESTS",
    500: "INTERNAL_SERVER_ERROR",
    501: "NOT_IMPLEMENTED",
    502: "BAD_GATEWAY",
    503: "SERVICE_UNAVAILABLE",
    504: "GATEWAY_TIMEOUT",
};
// export type INTEGRATIONS =
//     | "Pinia Colada"
//     | "React SWR"
//     | "Tanstack Query"


export interface GeneratorOptions extends ContractGeneratorOptions, ZodGeneratorOptions {
    // Options accessible from index.ts
    outputDir: string;
}

