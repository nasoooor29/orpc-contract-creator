import { oc } from "@orpc/contract";
import { z } from "zod";
import * as zodTypes from "./zod-types.gen";

const addpet = oc
  .route({
    method: "POST",
    path: "/pet",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.PetSchema
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PetSchema
  }));

const updatepet = oc
  .route({
    method: "PUT",
    path: "/pet",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.PetSchema
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PetSchema
  }));

const findpetsbystatus = oc
  .route({
    method: "GET",
    path: "/pet/findByStatus",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      status: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.array(zodTypes.PetSchema)
  }));

const findpetsbytags = oc
  .route({
    method: "GET",
    path: "/pet/findByTags",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      tags: z.array(z.string())
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.array(zodTypes.PetSchema)
  }));

const getpetbyid = oc
  .route({
    method: "GET",
    path: "/pet/{petId}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      petId: z.coerce.number().int()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PetSchema
  }));

const updatepetwithform = oc
  .route({
    method: "POST",
    path: "/pet/{petId}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      petId: z.coerce.number().int()
    }),
    query: z.object({
      name: z.string().optional(),
      status: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.PetSchema
  }));

const deletepet = oc
  .route({
    method: "DELETE",
    path: "/pet/{petId}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      petId: z.coerce.number().int()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.undefined()
  }));

const uploadfile = oc
  .route({
    method: "POST",
    path: "/pet/{petId}/uploadImage",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      petId: z.coerce.number().int()
    }),
    query: z.object({
      additionalMetadata: z.string().optional()
    }),
    body: zodTypes.UploadFileInputSchema.optional()
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.ApiResponseSchema
  }));

const getinventory = oc
  .route({
    method: "GET",
    path: "/store/inventory",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.GetInventoryResponseSchema
  }));

const placeorder = oc
  .route({
    method: "POST",
    path: "/store/order",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.OrderSchema.optional()
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.OrderSchema
  }));

const getorderbyid = oc
  .route({
    method: "GET",
    path: "/store/order/{orderId}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      orderId: z.coerce.number().int()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.OrderSchema
  }));

const deleteorder = oc
  .route({
    method: "DELETE",
    path: "/store/order/{orderId}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      orderId: z.coerce.number().int()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.undefined()
  }));

const createuser = oc
  .route({
    method: "POST",
    path: "/user",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    body: zodTypes.UserSchema.optional()
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.UserSchema
  }));

const createuserswithlistinput = oc
  .route({
    method: "POST",
    path: "/user/createWithList",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    body: z.array(zodTypes.UserSchema).optional()
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.UserSchema
  }));

const loginuser = oc
  .route({
    method: "GET",
    path: "/user/login",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    query: z.object({
      username: z.string().optional(),
      password: z.string().optional()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.LoginUserResponseSchema
  }));

const logoutuser = oc
  .route({
    method: "GET",
    path: "/user/logout",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .output(z.object({
    status: z.literal(200),
    body: z.undefined()
  }));

const getuserbyname = oc
  .route({
    method: "GET",
    path: "/user/{username}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      username: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: zodTypes.UserSchema
  }));

const updateuser = oc
  .route({
    method: "PUT",
    path: "/user/{username}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      username: z.string()
    }),
    body: zodTypes.UserSchema.optional()
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.undefined()
  }));

const deleteuser = oc
  .route({
    method: "DELETE",
    path: "/user/{username}",
    inputStructure: "detailed",
    outputStructure: "detailed"
  })
  .input(z.object({
    params: z.object({
      username: z.string()
    })
  }))
  .output(z.object({
    status: z.literal(200),
    body: z.undefined()
  }));

export const contract = oc.router({
  pet: {
    addpet,
    updatepet,
    findpetsbystatus,
    findpetsbytags,
    getpetbyid,
    updatepetwithform,
    deletepet,
    uploadfile,
  },
  store: {
    getinventory,
    placeorder,
    getorderbyid,
    deleteorder,
  },
  user: {
    createuser,
    createuserswithlistinput,
    loginuser,
    logoutuser,
    getuserbyname,
    updateuser,
    deleteuser,
  },
});
