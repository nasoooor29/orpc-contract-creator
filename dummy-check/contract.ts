import { os } from '@orpc/server'
import * as z from 'zod'

const PlanetSchema = z.object({
    id: z.number().int().min(1),
    name: z.string(),
    description: z.string().optional(),
})
const errorSchema = z.object({
    code: z.string(),
    message: z.string(),
})

export const listPlanet = os
    .route({ method: 'GET', path: '/planets' })
    .input(z.object({
        limit: z.number().int().min(1).max(100).optional(),
        cursor: z.number().int().min(0).default(0),
    }))
    .output(z.array(PlanetSchema))
    .errors({
        INTERNAL_SERVER_ERROR: {
            data: errorSchema,
        },
    })

export const findPlanet = os
    .route({ method: 'GET', path: '/planets/{id}' })
    .input(z.object({ id: z.coerce.number().int().min(1) }))
    .output(PlanetSchema)
    .errors({
        NOT_FOUND: {
            data: errorSchema,
        },
        INTERNAL_SERVER_ERROR: {
            data: errorSchema,
        },
        BAD_REQUEST: {
            data: errorSchema,
        },
    })

export const createPlanet = os
    .route({ method: 'POST', path: '/planets' })
    .input(PlanetSchema.omit({ id: true }))
    .output(PlanetSchema)
    .errors({
        CONFLICT: {
            data: errorSchema,
        },
        INTERNAL_SERVER_ERROR: {
            data: errorSchema,
        },
        BAD_REQUEST: {
            data: errorSchema,
        },
    })

export const contract = {
    planet: {
        list: listPlanet,
        find: findPlanet,
        create: createPlanet
    }
}
