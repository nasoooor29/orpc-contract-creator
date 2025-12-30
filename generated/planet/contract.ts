import { oc } from "@orpc/contract";
import { z } from "zod";
import * as zodTypes from "./zod-types.gen";

const healthStatusHealthGet = oc
  .route({
    method: "GET",
    path: "/health",
    inputStructure: "detailed"
  })
  .output(z.object({}).passthrough());

const searchSearchPost = oc
  .route({
    method: "POST",
    path: "/search",
    inputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.SearchRequestSchema
  }))
  .output(z.array(zodTypes.SearchResponseSchema))
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const getThumbnailThumbnailsSceneIdGet = oc
  .route({
    method: "GET",
    path: "/thumbnails/{scene_id}",
    inputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      scene_id: z.string()
    }),
    query: z.object({
      size: z.number().int().optional()
    })
  }))
  .output(z.object({}).passthrough())
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const getTileTilesSceneIdZXYPngGet = oc
  .route({
    method: "GET",
    path: "/tiles/{scene_id}/{z}/{x}/{y}.png",
    inputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      scene_id: z.string(),
      z: z.coerce.number().int(),
      x: z.coerce.number().int(),
      y: z.coerce.number().int()
    })
  }))
  .output(z.object({}).passthrough())
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const getOrdersOrdersGet = oc
  .route({
    method: "GET",
    path: "/orders",
    inputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      last_evaluated_key: z.string().optional(),
      username: z.string().optional(),
      state: z.string().optional()
    })
  }))
  .output(zodTypes.OrdersResponseSchema)
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const createOrderOrdersPost = oc
  .route({
    method: "POST",
    path: "/orders",
    inputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.OrderRequestSchema
  }))
  .output(zodTypes.OrderResponseSchema)
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const getOrderOrdersEomapIdGet = oc
  .route({
    method: "GET",
    path: "/orders/{eomap_id}",
    inputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      eomap_id: z.string()
    })
  }))
  .output(zodTypes.OrderDetailsResponseSchema)
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const getOrderStatusOrdersEomapIdStatusGet = oc
  .route({
    method: "GET",
    path: "/orders/{eomap_id}/status",
    inputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      eomap_id: z.string()
    })
  }))
  .output(zodTypes.OrderStatusResponseSchema)
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

const updateOrderStatusOrdersEomapIdStatusPost = oc
  .route({
    method: "POST",
    path: "/orders/{eomap_id}/status",
    inputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      eomap_id: z.string()
    }),
    body: zodTypes.OrderUpdateRequestSchema
  }))
  .output(z.object({}).passthrough())
  .errors({
  UNPROCESSABLE_CONTENT: {
    data: zodTypes.HTTPValidationErrorSchema
  }
});

export const contract = oc.router({
  healthCheck: {
    healthStatusHealthGet,
  },
  search: {
    searchSearchPost,
  },
  visualize: {
    getThumbnailThumbnailsSceneIdGet,
    getTileTilesSceneIdZXYPngGet,
  },
  order: {
    getOrdersOrdersGet,
    createOrderOrdersPost,
    getOrderOrdersEomapIdGet,
    getOrderStatusOrdersEomapIdStatusGet,
    updateOrderStatusOrdersEomapIdStatusPost,
  },
});
