import { z } from "zod";

export const Position2DSchema = z.array(z.unknown());
export type Position2D = z.infer<typeof Position2DSchema>;

export const Position3DSchema = z.array(z.unknown());
export type Position3D = z.infer<typeof Position3DSchema>;

export const MultiPolygonSchema = z.object({
  bbox: z.union([z.array(z.unknown()), z.array(z.unknown()), z.null()]),
  type: z.string(),
  coordinates: z.array(z.array(z.array(z.union([Position2DSchema, Position3DSchema]))))
});
export type MultiPolygon = z.infer<typeof MultiPolygonSchema>;

export const PolygonSchema = z.object({
  bbox: z.union([z.array(z.unknown()), z.array(z.unknown()), z.null()]),
  type: z.string(),
  coordinates: z.array(z.array(z.union([Position2DSchema, Position3DSchema])))
});
export type Polygon = z.infer<typeof PolygonSchema>;

export const ClipTool_InputSchema = z.object({
  aoi: z.union([MultiPolygonSchema, PolygonSchema, z.null()])
});
export type ClipTool_Input = z.infer<typeof ClipTool_InputSchema>;

export const ClipTool_OutputSchema = z.object({
  aoi: z.union([MultiPolygonSchema, PolygonSchema, z.null()])
});
export type ClipTool_Output = z.infer<typeof ClipTool_OutputSchema>;

export const FormatToolSchema = z.object({
  format: z.string()
});
export type FormatTool = z.infer<typeof FormatToolSchema>;

export const ValidationErrorSchema = z.object({
  loc: z.array(z.union([z.string(), z.number().int()])),
  msg: z.string(),
  type: z.string()
});
export type ValidationError = z.infer<typeof ValidationErrorSchema>;

export const HTTPValidationErrorSchema = z.object({
  detail: z.array(ValidationErrorSchema)
});
export type HTTPValidationError = z.infer<typeof HTTPValidationErrorSchema>;

export const OrderProductSchema = z.object({
  item_ids: z.array(z.string()),
  item_type: z.string(),
  product_bundle: z.string()
});
export type OrderProduct = z.infer<typeof OrderProductSchema>;

export const OrderTool_OutputSchema = z.object({
  clip: z.union([ClipTool_OutputSchema, z.null()]),
  file_format: z.union([FormatToolSchema, z.null()])
});
export type OrderTool_Output = z.infer<typeof OrderTool_OutputSchema>;

export const StateEnumSchema = z.enum(["queued", "running", "success", "partial", "failed", "cancelled"]);
export type StateEnum = z.infer<typeof StateEnumSchema>;

export const OrderDetailsResponseSchema = z.object({
  id: z.string(),
  created_on: z.string(),
  eomap_id: z.string(),
  products: z.array(OrderProductSchema),
  tools: z.union([z.array(OrderTool_OutputSchema), z.null()]),
  error_hints: z.union([z.array(z.string()), z.null()]),
  state: StateEnumSchema,
  last_message: z.string(),
  s3_path: z.string()
});
export type OrderDetailsResponse = z.infer<typeof OrderDetailsResponseSchema>;

export const OrderRequestSchema = z.object({
  scene_ids: z.array(z.string()),
  clip_aoi: z.union([PolygonSchema, MultiPolygonSchema, z.null()]),
  rgb_only: z.boolean(),
  username: z.string(),
  webhook_url: z.union([z.string(), z.null()])
});
export type OrderRequest = z.infer<typeof OrderRequestSchema>;

export const OrderResponseSchema = z.object({
  id: z.string(),
  created_on: z.string(),
  eomap_id: z.string(),
  products: z.array(OrderProductSchema),
  tools: z.union([z.array(OrderTool_OutputSchema), z.null()]),
  error_hints: z.union([z.array(z.string()), z.null()]),
  state: StateEnumSchema,
  last_message: z.string(),
  username: z.string(),
  planet_user_key: z.boolean(),
  webhook_url: z.union([z.string(), z.null()]),
  s3_path: z.string()
});
export type OrderResponse = z.infer<typeof OrderResponseSchema>;

export const OrderStatusResponseSchema = z.object({
  error_hints: z.union([z.array(z.string()), z.null()]),
  state: z.string(),
  last_message: z.string()
});
export type OrderStatusResponse = z.infer<typeof OrderStatusResponseSchema>;

export const OrderTool_InputSchema = z.object({
  clip: z.union([ClipTool_InputSchema, z.null()]),
  file_format: z.union([FormatToolSchema, z.null()])
});
export type OrderTool_Input = z.infer<typeof OrderTool_InputSchema>;

export const OrderUpdateRequestSchema = z.object({
  id: z.string(),
  created_on: z.string(),
  name: z.string(),
  products: z.array(OrderProductSchema),
  tools: z.union([z.array(OrderTool_InputSchema), z.null()]),
  error_hints: z.union([z.array(z.string()), z.null()]),
  state: StateEnumSchema,
  last_message: z.string()
});
export type OrderUpdateRequest = z.infer<typeof OrderUpdateRequestSchema>;

export const PlanetOrderModelSchema = z.object({
  id: z.string(),
  created_on: z.string(),
  eomap_id: z.string(),
  products: z.array(OrderProductSchema),
  tools: z.union([z.array(OrderTool_OutputSchema), z.null()]),
  error_hints: z.union([z.array(z.string()), z.null()]),
  state: StateEnumSchema,
  last_message: z.string(),
  username: z.string(),
  planet_user_key: z.boolean(),
  webhook_url: z.union([z.string(), z.null()]),
  s3_path: z.string()
});
export type PlanetOrderModel = z.infer<typeof PlanetOrderModelSchema>;

export const OrdersResponseSchema = z.object({
  data: z.array(PlanetOrderModelSchema),
  last_evaluated_key: z.union([z.string(), z.null()])
});
export type OrdersResponse = z.infer<typeof OrdersResponseSchema>;

export const SearchRequestSchema = z.object({
  geometry: z.union([PolygonSchema, MultiPolygonSchema]),
  start_date: z.string().datetime(),
  end_date: z.union([z.string().datetime(), z.null()]),
  max_cloud_cover: z.union([z.number().int(), z.null()]),
  include_preview_scenes: z.boolean()
});
export type SearchRequest = z.infer<typeof SearchRequestSchema>;

export const SearchResponseSchema = z.object({
  id: z.string(),
  cloud_cover: z.number().int(),
  sun_azimuth: z.number(),
  sun_elevation: z.number(),
  geometry: z.union([PolygonSchema, MultiPolygonSchema]),
  datetime: z.string(),
  publishing_stage: z.string(),
  sensor: z.string(),
  scene_name: z.string()
});
export type SearchResponse = z.infer<typeof SearchResponseSchema>;

export const HealthStatusHealthGetResponseSchema = z.unknown();
export type HealthStatusHealthGetResponse = z.infer<typeof HealthStatusHealthGetResponseSchema>;

export const SearchSearchPostResponseSchema = z.array(SearchResponseSchema);
export type SearchSearchPostResponse = z.infer<typeof SearchSearchPostResponseSchema>;

export const get_thumbnail_thumbnails__scene_id__get_scene_id_paramSchema = z.string();
export type get_thumbnail_thumbnails__scene_id__get_scene_id_param = z.infer<typeof get_thumbnail_thumbnails__scene_id__get_scene_id_paramSchema>;

export const get_thumbnail_thumbnails__scene_id__get_size_paramSchema = z.number().int().max(512);
export type get_thumbnail_thumbnails__scene_id__get_size_param = z.infer<typeof get_thumbnail_thumbnails__scene_id__get_size_paramSchema>;

export const GetThumbnailThumbnailsSceneIdGetResponseSchema = z.unknown();
export type GetThumbnailThumbnailsSceneIdGetResponse = z.infer<typeof GetThumbnailThumbnailsSceneIdGetResponseSchema>;

export const get_tile_tiles__scene_id___z___x___y__png_get_scene_id_paramSchema = z.string();
export type get_tile_tiles__scene_id___z___x___y__png_get_scene_id_param = z.infer<typeof get_tile_tiles__scene_id___z___x___y__png_get_scene_id_paramSchema>;

export const get_tile_tiles__scene_id___z___x___y__png_get_z_paramSchema = z.number().int();
export type get_tile_tiles__scene_id___z___x___y__png_get_z_param = z.infer<typeof get_tile_tiles__scene_id___z___x___y__png_get_z_paramSchema>;

export const get_tile_tiles__scene_id___z___x___y__png_get_x_paramSchema = z.number().int();
export type get_tile_tiles__scene_id___z___x___y__png_get_x_param = z.infer<typeof get_tile_tiles__scene_id___z___x___y__png_get_x_paramSchema>;

export const get_tile_tiles__scene_id___z___x___y__png_get_y_paramSchema = z.number().int();
export type get_tile_tiles__scene_id___z___x___y__png_get_y_param = z.infer<typeof get_tile_tiles__scene_id___z___x___y__png_get_y_paramSchema>;

export const GetTileTilesSceneIdZXYPngGetResponseSchema = z.unknown();
export type GetTileTilesSceneIdZXYPngGetResponse = z.infer<typeof GetTileTilesSceneIdZXYPngGetResponseSchema>;

export const get_orders_orders_get_last_evaluated_key_paramSchema = z.union([z.string(), z.null()]);
export type get_orders_orders_get_last_evaluated_key_param = z.infer<typeof get_orders_orders_get_last_evaluated_key_paramSchema>;

export const get_orders_orders_get_username_paramSchema = z.union([z.string(), z.null()]);
export type get_orders_orders_get_username_param = z.infer<typeof get_orders_orders_get_username_paramSchema>;

export const get_orders_orders_get_state_paramSchema = z.union([StateEnumSchema, z.null()]);
export type get_orders_orders_get_state_param = z.infer<typeof get_orders_orders_get_state_paramSchema>;

export const get_order_orders__eomap_id__get_eomap_id_paramSchema = z.string();
export type get_order_orders__eomap_id__get_eomap_id_param = z.infer<typeof get_order_orders__eomap_id__get_eomap_id_paramSchema>;

export const get_order_status_orders__eomap_id__status_get_eomap_id_paramSchema = z.string();
export type get_order_status_orders__eomap_id__status_get_eomap_id_param = z.infer<typeof get_order_status_orders__eomap_id__status_get_eomap_id_paramSchema>;

export const update_order_status_orders__eomap_id__status_post_eomap_id_paramSchema = z.string();
export type update_order_status_orders__eomap_id__status_post_eomap_id_param = z.infer<typeof update_order_status_orders__eomap_id__status_post_eomap_id_paramSchema>;

export const UpdateOrderStatusOrdersEomapIdStatusPostResponseSchema = z.unknown();
export type UpdateOrderStatusOrdersEomapIdStatusPostResponse = z.infer<typeof UpdateOrderStatusOrdersEomapIdStatusPostResponseSchema>;
