// Auto-generated TypeScript interfaces from OpenAPI spec
// Do not edit manually

export type Position2D = unknown[];

export type Position3D = unknown[];

export interface MultiPolygon {
  bbox: unknown[] | unknown[] | null;
  type: string;
  coordinates: Position2D | Position3D[][][];
}

export interface Polygon {
  bbox: unknown[] | unknown[] | null;
  type: string;
  coordinates: Position2D | Position3D[][];
}

export interface ClipTool_Input {
  aoi: MultiPolygon | Polygon | null;
}

export interface ClipTool_Output {
  aoi: MultiPolygon | Polygon | null;
}

export interface FormatTool {
  format: string;
}

export interface ValidationError {
  loc: string | number[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[];
}

export interface OrderProduct {
  item_ids: string[];
  item_type: string;
  product_bundle: string;
}

export interface OrderTool_Output {
  clip: ClipTool_Output | null;
  file_format: FormatTool | null;
}

export type StateEnum = "queued" | "running" | "success" | "partial" | "failed" | "cancelled";

export interface OrderDetailsResponse {
  id: string;
  created_on: string;
  eomap_id: string;
  products: OrderProduct[];
  tools: OrderTool_Output[] | null;
  error_hints: string[] | null;
  state: StateEnum;
  last_message: string;
  s3_path: string;
}

export interface OrderRequest {
  scene_ids: string[];
  clip_aoi: Polygon | MultiPolygon | null;
  rgb_only: boolean;
  username: string;
  webhook_url: string | null;
}

export interface OrderResponse {
  id: string;
  created_on: string;
  eomap_id: string;
  products: OrderProduct[];
  tools: OrderTool_Output[] | null;
  error_hints: string[] | null;
  state: StateEnum;
  last_message: string;
  username: string;
  planet_user_key: boolean;
  webhook_url: string | null;
  s3_path: string;
}

export interface OrderStatusResponse {
  error_hints: string[] | null;
  state: string;
  last_message: string;
}

export interface OrderTool_Input {
  clip: ClipTool_Input | null;
  file_format: FormatTool | null;
}

export interface OrderUpdateRequest {
  id: string;
  created_on: string;
  name: string;
  products: OrderProduct[];
  tools: OrderTool_Input[] | null;
  error_hints: string[] | null;
  state: StateEnum;
  last_message: string;
}

export interface PlanetOrderModel {
  id: string;
  created_on: string;
  eomap_id: string;
  products: OrderProduct[];
  tools: OrderTool_Output[] | null;
  error_hints: string[] | null;
  state: StateEnum;
  last_message: string;
  username: string;
  planet_user_key: boolean;
  webhook_url: string | null;
  s3_path: string;
}

export interface OrdersResponse {
  data: PlanetOrderModel[];
  last_evaluated_key: string | null;
}

export interface SearchRequest {
  geometry: Polygon | MultiPolygon;
  start_date: string;
  end_date: string | null;
  max_cloud_cover: number | null;
  include_preview_scenes: boolean;
}

export interface SearchResponse {
  id: string;
  cloud_cover: number;
  sun_azimuth: number;
  sun_elevation: number;
  geometry: Polygon | MultiPolygon;
  datetime: string;
  publishing_stage: string;
  sensor: string;
  scene_name: string;
}

export type HealthStatusHealthGetResponse = unknown;

export type SearchSearchPostResponse = SearchResponse[];

export type get_thumbnail_thumbnails__scene_id__get_scene_id_param = string;

export type get_thumbnail_thumbnails__scene_id__get_size_param = number;

export type GetThumbnailThumbnailsSceneIdGetResponse = unknown;

export type get_tile_tiles__scene_id___z___x___y__png_get_scene_id_param = string;

export type get_tile_tiles__scene_id___z___x___y__png_get_z_param = number;

export type get_tile_tiles__scene_id___z___x___y__png_get_x_param = number;

export type get_tile_tiles__scene_id___z___x___y__png_get_y_param = number;

export type GetTileTilesSceneIdZXYPngGetResponse = unknown;

export type get_orders_orders_get_last_evaluated_key_param = string | null;

export type get_orders_orders_get_username_param = string | null;

export type get_orders_orders_get_state_param = StateEnum | null;

export type get_order_orders__eomap_id__get_eomap_id_param = string;

export type get_order_status_orders__eomap_id__status_get_eomap_id_param = string;

export type update_order_status_orders__eomap_id__status_post_eomap_id_param = string;

export type UpdateOrderStatusOrdersEomapIdStatusPostResponse = unknown;
