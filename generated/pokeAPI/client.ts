import type { JsonifiedClient } from "@orpc/openapi-client";
import type { ContractRouterClient } from "@orpc/contract";
import { createORPCClient } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { contract } from "./contract";

/**
 * Create a type-safe client for the pokeAPI API
 */
export function createPokeapiClient(baseUrl: string) {
  const link = new OpenAPILink(contract, {
    url: baseUrl,
  });

  return createORPCClient(link) as JsonifiedClient<
    ContractRouterClient<typeof contract>
  >;
}

export type PokeapiClient = ReturnType<typeof createPokeapiClient>;
