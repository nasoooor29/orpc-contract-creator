import type { JsonifiedClient } from '@orpc/openapi-client'
import type { ContractRouterClient } from '@orpc/contract'
import { createORPCClient } from '@orpc/client'
import { OpenAPILink } from '@orpc/openapi-client/fetch'
import { contract } from './contract'

const link = new OpenAPILink(contract, {
    url: 'fill this later',
})

const client: JsonifiedClient<ContractRouterClient<typeof contract>> = createORPCClient(link)
client.planet.create({
    name: 'Earth',
})
