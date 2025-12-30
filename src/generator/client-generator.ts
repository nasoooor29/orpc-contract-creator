export function generateClient(specName: string): string {
    return `import type { JsonifiedClient } from "@orpc/openapi-client";
import type { ContractRouterClient } from "@orpc/contract";
import { createORPCClient } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { contract } from "./contract";

/**
 * Create a type-safe client for the ${specName} API
 */
export function create${toPascalCase(specName)}Client(baseUrl: string) {
  const link = new OpenAPILink(contract, {
    url: baseUrl,
  });

  return createORPCClient(link) as JsonifiedClient<
    ContractRouterClient<typeof contract>
  >;
}

export type ${toPascalCase(specName)}Client = ReturnType<typeof create${toPascalCase(specName)}Client>;
`;
}

function toPascalCase(str: string): string {
    return str
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
}

