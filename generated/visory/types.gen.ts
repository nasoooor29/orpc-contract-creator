// Auto-generated TypeScript interfaces from OpenAPI spec
// Do not edit manually

export interface database_HealthStats {
  idle: number;
  in_use: number;
  max_idle_closed: number;
  max_lifetime_closed: number;
  open_connections: number;
  wait_count: number;
  wait_duration: string;
}

export interface database_Health {
  app_version: string;
  base_url: string;
  error: string;
  message: string;
  stats: database_HealthStats;
  status: string;
}

export interface models_ClearOldLogsResponse {
  before: string;
  message: string;
  retention_days: number;
}

export interface models_CreateRuleRequest {
  action: "accept" | "drop";
  chain: "input" | "forward" | "output";
  comment: string;
  port: number;
  protocol: "tcp" | "udp";
  source_ip: string;
}

export interface models_CreateVMRequest {
  autostart: boolean;
  disk: number;
  memory: number;
  name: string;
  os_image: string;
  vcpus: number;
}

export interface models_ErrorRateByService {
  error_count: number;
  error_rate: number;
  service_group: string;
  total_count: number;
}

export interface models_FirewallRule {
  action: string;
  chain: string;
  comment: string;
  handle: number;
  port: number;
  protocol: string;
  source_ip: string;
}

export interface models_FirewallStatus {
  enabled: boolean;
  rule_count: number;
  table_name: string;
}

export interface models_LogResponse {
  action: string;
  created_at: string;
  details: string;
  id: number;
  level: string;
  service_group: string;
  user_id: number;
}

export interface models_GetLogsResponse {
  logs: models_LogResponse[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}

export interface models_HTTPError {
  message: string;
}

export interface models_ServiceHealth {
  error_count: number;
  error_rate: number;
  service_group: string;
  status: string;
  total_count: number;
}

export interface models_HealthMetricsResponse {
  alerts: string[];
  overall_status: string;
  period: string;
  services: models_ServiceHealth[];
  timestamp: string;
}

export interface models_LogCountByHour {
  hour: string;
  log_count: number;
}

export interface models_LogLevelStats {
  count: number;
  level: string;
  percentage: number;
}

export interface models_LogStatsResponse {
  days: number;
  levels: string[];
  service_groups: string[];
  since: string;
  total: number;
}

export interface models_Login {
  password: string;
  username: string;
}

export interface models_MetricsPeriod {
  days: number;
  since: string;
  until: string;
}

export interface models_ServiceStats {
  count: number;
  percentage: number;
  service_group: string;
}

export interface models_MetricsResponse {
  error_rate_by_service: models_ErrorRateByService[];
  log_count_by_hour: models_LogCountByHour[];
  log_level_distribution: models_LogLevelStats[];
  period: models_MetricsPeriod;
  service_group_distribution: models_ServiceStats[];
}

export interface models_MountPoint {
  available: number;
  device: string;
  fs_type: string;
  path: string;
  total: number;
  use_percent: number;
  used: number;
}

export interface models_ReorderRulesRequest {
  chain: "input" | "forward" | "output";
  handles: number[];
}

export interface models_ServiceMetricsResponse {
  days: number;
  error_count: number;
  error_rate: number;
  level_distribution: models_LogLevelStats[];
  service_group: string;
  since: string;
  total_logs: number;
}

export interface models_StorageDevice {
  mount_point: string;
  name: string;
  size: string;
  size_bytes: number;
  type: string;
  usage_percent: number;
}

export interface models_VMActionResponse {
  message: string;
  success: boolean;
}

export interface models_VirtualMachine {
  id: number;
  name: string;
  uuid: string;
}

export interface models_VirtualMachineWithInfo {
  cpu_time_ns: number;
  id: number;
  max_mem_kb: number;
  memory_kb: number;
  name: string;
  state: number;
  uuid: string;
  vcpus: number;
  vnc_ip: string;
  vnc_port: number;
}

export interface notifications_NotificationSetting {
  config: string;
  created_at: string;
  enabled: boolean;
  id: number;
  notify_on_error: boolean;
  notify_on_info: boolean;
  notify_on_warn: boolean;
  provider: string;
  updated_at: string;
  webhook_url: string;
}

export interface services_NotificationSettingRequest {
  config: string;
  enabled: boolean;
  notify_on_error: boolean;
  notify_on_info: boolean;
  notify_on_warn: boolean;
  provider: string;
  webhook_url: string;
}

export interface user_CreateUserParams {
  email: string;
  password: string;
  role: string;
  username: string;
}

export interface user_User {
  created_at: string;
  email: string;
  id: number;
  password: string;
  role: string;
  updated_at: string;
  username: string;
}

export interface user_UserSession {
  created_at: string;
  id: number;
  session_token: string;
  updated_at: string;
  user_id: number;
}

export interface user_GetUserAndSessionByTokenRow {
  user: user_User;
  user_session: user_UserSession;
}

export interface user_UpsertUserParams {
  email: string;
  password: string;
  role: string;
  username: string;
}

export type GetResponse = Record<string, string>;

export type GetAuthLogoutResponse = null;

export type get_auth_oauth__provider__provider_param = string;

export type GetDocsSpecResponse = Record<string, unknown>;

export type GetFirewallRulesResponse = models_FirewallRule[];

export type PostFirewallRulesReorderResponse = models_FirewallRule[];

export type delete_firewall_rules__handle__handle_param = number;

export type GetIsoResponse = Record<string, unknown>[];

export type PostIsoInput = File | Blob;

export type PostIsoResponse = Record<string, unknown>;

export type get_iso__filename__filename_param = string;

export type GetIsoFilenameResponse = Record<string, unknown>;

export type delete_iso__filename__filename_param = string;

export type DeleteIsoFilenameResponse = Record<string, unknown>;

export type get_iso__filename__download_filename_param = string;

export type GetIsoFilenameDownloadResponse = string;

export type get_logs_service_group_param = string;

export type get_logs_level_param = string;

export type get_logs_page_param = number;

export type get_logs_page_size_param = number;

export type get_logs_days_param = number;

export type delete_logs_cleanup_days_param = number;

export type get_logs_stats_days_param = number;

export type get_metrics_days_param = number;

export type get_metrics__service__service_param = string;

export type get_metrics__service__days_param = number;

export type GetQemuVirtualMachinesResponse = models_VirtualMachine[];

export type GetQemuVirtualMachinesInfoResponse = models_VirtualMachineWithInfo[];

export type get_qemu_virtual_machines__uuid__uuid_param = string;

export type get_qemu_virtual_machines__uuid__console_uuid_param = string;

export type get_qemu_virtual_machines__uuid__info_uuid_param = string;

export type post_qemu_virtual_machines__uuid__reboot_uuid_param = string;

export type post_qemu_virtual_machines__uuid__shutdown_uuid_param = string;

export type post_qemu_virtual_machines__uuid__start_uuid_param = string;

export type GetSettingsNotificationsResponse = notifications_NotificationSetting[];

export type get_settings_notifications__provider__provider_param = string;

export type delete_settings_notifications__provider__provider_param = string;

export type post_settings_notifications__provider__test_provider_param = string;

export type PostSettingsNotificationsProviderTestInput = Record<string, unknown>;

export type PostSettingsNotificationsProviderTestResponse = Record<string, string>;

export type GetStorageDevicesResponse = models_StorageDevice[];

export type GetStorageMountPointsResponse = models_MountPoint[];

export type GetUsersResponse = user_User[];

export type get_users__id__id_param = number;

export type put_users__id__id_param = number;

export interface PutUsersIdInput {
  email: string;
  role: string;
  username: string;
}

export type delete_users__id__id_param = number;

export type patch_users__id__role_id_param = number;

export interface PatchUsersIdRoleInput {
  role: string;
}
