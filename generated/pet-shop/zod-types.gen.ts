import { z } from "zod";

export const OrderSchema = z.object({
  id: z.number().int(),
  petId: z.number().int(),
  quantity: z.number().int(),
  shipDate: z.string().datetime(),
  status: z.enum(["placed", "approved", "delivered"]),
  complete: z.boolean()
});
export type Order = z.infer<typeof OrderSchema>;

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string()
});
export type Category = z.infer<typeof CategorySchema>;

export const UserSchema = z.object({
  id: z.number().int(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  userStatus: z.number().int()
});
export type User = z.infer<typeof UserSchema>;

export const TagSchema = z.object({
  id: z.number().int(),
  name: z.string()
});
export type Tag = z.infer<typeof TagSchema>;

export const PetSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  category: CategorySchema,
  photoUrls: z.array(z.string()),
  tags: z.array(TagSchema),
  status: z.enum(["available", "pending", "sold"])
});
export type Pet = z.infer<typeof PetSchema>;

export const ApiResponseSchema = z.object({
  code: z.number().int(),
  type: z.string(),
  message: z.string()
});
export type ApiResponse = z.infer<typeof ApiResponseSchema>;

export const findPetsByStatus_status_paramSchema = z.enum(["available", "pending", "sold"]);
export type findPetsByStatus_status_param = z.infer<typeof findPetsByStatus_status_paramSchema>;

export const FindPetsByStatusResponseSchema = z.array(PetSchema);
export type FindPetsByStatusResponse = z.infer<typeof FindPetsByStatusResponseSchema>;

export const findPetsByTags_tags_paramSchema = z.array(z.string());
export type findPetsByTags_tags_param = z.infer<typeof findPetsByTags_tags_paramSchema>;

export const FindPetsByTagsResponseSchema = z.array(PetSchema);
export type FindPetsByTagsResponse = z.infer<typeof FindPetsByTagsResponseSchema>;

export const getPetById_petId_paramSchema = z.number().int();
export type getPetById_petId_param = z.infer<typeof getPetById_petId_paramSchema>;

export const updatePetWithForm_petId_paramSchema = z.number().int();
export type updatePetWithForm_petId_param = z.infer<typeof updatePetWithForm_petId_paramSchema>;

export const updatePetWithForm_name_paramSchema = z.string();
export type updatePetWithForm_name_param = z.infer<typeof updatePetWithForm_name_paramSchema>;

export const updatePetWithForm_status_paramSchema = z.string();
export type updatePetWithForm_status_param = z.infer<typeof updatePetWithForm_status_paramSchema>;

export const deletePet_api_key_paramSchema = z.string();
export type deletePet_api_key_param = z.infer<typeof deletePet_api_key_paramSchema>;

export const deletePet_petId_paramSchema = z.number().int();
export type deletePet_petId_param = z.infer<typeof deletePet_petId_paramSchema>;

export const uploadFile_petId_paramSchema = z.number().int();
export type uploadFile_petId_param = z.infer<typeof uploadFile_petId_paramSchema>;

export const uploadFile_additionalMetadata_paramSchema = z.string();
export type uploadFile_additionalMetadata_param = z.infer<typeof uploadFile_additionalMetadata_paramSchema>;

export const UploadFileInputSchema = z.any();
export type UploadFileInput = z.infer<typeof UploadFileInputSchema>;

export const GetInventoryResponseSchema = z.record(z.string(), z.number().int());
export type GetInventoryResponse = z.infer<typeof GetInventoryResponseSchema>;

export const getOrderById_orderId_paramSchema = z.number().int();
export type getOrderById_orderId_param = z.infer<typeof getOrderById_orderId_paramSchema>;

export const deleteOrder_orderId_paramSchema = z.number().int();
export type deleteOrder_orderId_param = z.infer<typeof deleteOrder_orderId_paramSchema>;

export const CreateUsersWithListInputInputSchema = z.array(UserSchema);
export type CreateUsersWithListInputInput = z.infer<typeof CreateUsersWithListInputInputSchema>;

export const loginUser_username_paramSchema = z.string();
export type loginUser_username_param = z.infer<typeof loginUser_username_paramSchema>;

export const loginUser_password_paramSchema = z.string();
export type loginUser_password_param = z.infer<typeof loginUser_password_paramSchema>;

export const LoginUserResponseSchema = z.string();
export type LoginUserResponse = z.infer<typeof LoginUserResponseSchema>;

export const getUserByName_username_paramSchema = z.string();
export type getUserByName_username_param = z.infer<typeof getUserByName_username_paramSchema>;

export const updateUser_username_paramSchema = z.string();
export type updateUser_username_param = z.infer<typeof updateUser_username_paramSchema>;

export const deleteUser_username_paramSchema = z.string();
export type deleteUser_username_param = z.infer<typeof deleteUser_username_paramSchema>;
