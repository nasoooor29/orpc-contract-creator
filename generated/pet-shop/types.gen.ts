// Auto-generated TypeScript interfaces from OpenAPI spec
// Do not edit manually

export interface Order {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: "placed" | "approved" | "delivered";
  complete: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Pet {
  id: number;
  name: string;
  category: Category;
  photoUrls: string[];
  tags: Tag[];
  status: "available" | "pending" | "sold";
}

export interface ApiResponse {
  code: number;
  type: string;
  message: string;
}

export type findPetsByStatus_status_param = "available" | "pending" | "sold";

export type FindPetsByStatusResponse = Pet[];

export type findPetsByTags_tags_param = string[];

export type FindPetsByTagsResponse = Pet[];

export type getPetById_petId_param = number;

export type updatePetWithForm_petId_param = number;

export type updatePetWithForm_name_param = string;

export type updatePetWithForm_status_param = string;

export type deletePet_api_key_param = string;

export type deletePet_petId_param = number;

export type uploadFile_petId_param = number;

export type uploadFile_additionalMetadata_param = string;

export type UploadFileInput = string;

export type GetInventoryResponse = Record<string, number>;

export type getOrderById_orderId_param = number;

export type deleteOrder_orderId_param = number;

export type CreateUsersWithListInputInput = User[];

export type loginUser_username_param = string;

export type loginUser_password_param = string;

export type LoginUserResponse = string;

export type getUserByName_username_param = string;

export type updateUser_username_param = string;

export type deleteUser_username_param = string;
