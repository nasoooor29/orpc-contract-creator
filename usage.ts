import { OpenAPILink } from "@orpc/openapi-client/fetch"
import { Z, contract, createVisoryClient } from "./generated/visory"
const client = createVisoryClient("http://localhost:8080")



import { createTanstackQueryUtils } from '@orpc/tanstack-query' // now if you need any integration just use it
import { createORPCClient, onError } from "@orpc/client"
import type { JsonifiedClient } from "@orpc/openapi-client"
import type { ContractRouterClient } from "@orpc/contract"
export const orpc = createTanstackQueryUtils(client, {})
orpc.accounts.getAuthMe.queryOptions()// now you can use "useQuery" from tanstack-query with orpc client

// you need specific types or schemas? they are all here:
type AuthMeResponse = Z.user_GetUserAndSessionByTokenRow
const authMeSchema = Z.user_GetUserAndSessionByTokenRowSchema



// you want the contract to make custom client
export function createCustomVisoryClient(baseUrl: string) {
    const link = new OpenAPILink(contract, {
        url: baseUrl,
        headers: () => ({
            'x-api-key': 'my-api-key',
        }),
        fetch: (request, init) => {
            return globalThis.fetch(request, {
                ...init,
                credentials: 'include', // Include cookies for cross-origin requests
            })
        },
        interceptors: [
            onError((error) => {
                console.error(error)
            })
        ],
    })
    const client: JsonifiedClient<ContractRouterClient<typeof contract>> = createORPCClient(link)
    return {
        client,
        link
    }
}

const { client: customClient } = createCustomVisoryClient("http://localhost:8080")
const res = await customClient.accounts.getAuthMe()
console.log("Custom client auth me response:", res)
