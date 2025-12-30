import { oc } from "@orpc/contract";
import { z } from "zod";
import * as zodTypes from "./zod-types.gen";

const addpet = oc
  .route({ method: "POST", path: "/pet" })
  .input(zodTypes.PetSchema)
  .output(zodTypes.PetSchema);

const updatepet = oc
  .route({ method: "PUT", path: "/pet" })
  .input(zodTypes.PetSchema)
  .output(zodTypes.PetSchema);

const findpetsbystatus = oc
  .route({ method: "GET", path: "/pet/findByStatus" })
  .input(z.object({
    status: z.string()
  }))
  .output(z.array(zodTypes.PetSchema));

const findpetsbytags = oc
  .route({ method: "GET", path: "/pet/findByTags" })
  .input(z.object({
    tags: z.array(z.string())
  }))
  .output(z.array(zodTypes.PetSchema));

const getpetbyid = oc
  .route({ method: "GET", path: "/pet/{petId}" })
  .input(z.object({
    petId: z.coerce.number().int()
  }))
  .output(zodTypes.PetSchema);

const updatepetwithform = oc
  .route({ method: "POST", path: "/pet/{petId}" })
  .input(z.object({
    petId: z.coerce.number().int(),
    name: z.string().optional(),
    status: z.string().optional()
  }))
  .output(zodTypes.PetSchema);

const deletepet = oc
  .route({ method: "DELETE", path: "/pet/{petId}" })
  .input(z.object({
    petId: z.coerce.number().int()
  }));

const uploadfile = oc
  .route({ method: "POST", path: "/pet/{petId}/uploadImage" })
  .input(z.object({
    petId: z.coerce.number().int(),
    additionalMetadata: z.string().optional(),
    body: zodTypes.UploadFileInputSchema.optional()
  }))
  .output(zodTypes.ApiResponseSchema);

const getinventory = oc
  .route({ method: "GET", path: "/store/inventory" })
  .output(zodTypes.GetInventoryResponseSchema);

const placeorder = oc
  .route({ method: "POST", path: "/store/order" })
  .input(zodTypes.OrderSchema)
  .output(zodTypes.OrderSchema);

const getorderbyid = oc
  .route({ method: "GET", path: "/store/order/{orderId}" })
  .input(z.object({
    orderId: z.coerce.number().int()
  }))
  .output(zodTypes.OrderSchema);

const deleteorder = oc
  .route({ method: "DELETE", path: "/store/order/{orderId}" })
  .input(z.object({
    orderId: z.coerce.number().int()
  }));

const createuser = oc
  .route({ method: "POST", path: "/user" })
  .input(zodTypes.UserSchema)
  .output(zodTypes.UserSchema);

const createuserswithlistinput = oc
  .route({ method: "POST", path: "/user/createWithList" })
  .input(z.array(zodTypes.UserSchema))
  .output(zodTypes.UserSchema);

const loginuser = oc
  .route({ method: "GET", path: "/user/login" })
  .input(z.object({
    username: z.string().optional(),
    password: z.string().optional()
  }))
  .output(zodTypes.LoginUserResponseSchema);

const logoutuser = oc
  .route({ method: "GET", path: "/user/logout" });

const getuserbyname = oc
  .route({ method: "GET", path: "/user/{username}" })
  .input(z.object({
    username: z.string()
  }))
  .output(zodTypes.UserSchema);

const updateuser = oc
  .route({ method: "PUT", path: "/user/{username}" })
  .input(z.object({
    username: z.string(),
    body: zodTypes.UserSchema.optional()
  }));

const deleteuser = oc
  .route({ method: "DELETE", path: "/user/{username}" })
  .input(z.object({
    username: z.string()
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
