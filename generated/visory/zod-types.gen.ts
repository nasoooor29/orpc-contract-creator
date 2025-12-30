import { z } from "zod";

export const database_HealthStatsSchema = z.object({
  idle: z.number().int(),
  in_use: z.number().int(),
  max_idle_closed: z.number().int(),
  max_lifetime_closed: z.number().int(),
  open_connections: z.number().int(),
  wait_count: z.number().int(),
  wait_duration: z.string()
});
export type database_HealthStats = z.infer<typeof database_HealthStatsSchema>;

export const database_HealthSchema = z.object({
  app_version: z.string(),
  base_url: z.string(),
  error: z.string(),
  message: z.string(),
  stats: database_HealthStatsSchema,
  status: z.string()
});
export type database_Health = z.infer<typeof database_HealthSchema>;

export const models_ClearOldLogsResponseSchema = z.object({
  before: z.string(),
  message: z.string(),
  retention_days: z.number().int()
});
export type models_ClearOldLogsResponse = z.infer<typeof models_ClearOldLogsResponseSchema>;

export const models_CreateRuleRequestSchema = z.object({
  action: z.enum(["accept", "drop"]),
  chain: z.enum(["input", "forward", "output"]),
  comment: z.string(),
  port: z.number().int(),
  protocol: z.enum(["tcp", "udp"]),
  source_ip: z.string()
});
export type models_CreateRuleRequest = z.infer<typeof models_CreateRuleRequestSchema>;

export const models_CreateVMRequestSchema = z.object({
  autostart: z.boolean(),
  disk: z.number().int(),
  memory: z.number().int(),
  name: z.string(),
  os_image: z.string(),
  vcpus: z.number().int()
});
export type models_CreateVMRequest = z.infer<typeof models_CreateVMRequestSchema>;

export const models_ErrorRateByServiceSchema = z.object({
  error_count: z.number().int(),
  error_rate: z.number(),
  service_group: z.string(),
  total_count: z.number().int()
});
export type models_ErrorRateByService = z.infer<typeof models_ErrorRateByServiceSchema>;

export const models_FirewallRuleSchema = z.object({
  action: z.string(),
  chain: z.string(),
  comment: z.string(),
  handle: z.number().int(),
  port: z.number().int(),
  protocol: z.string(),
  source_ip: z.string()
});
export type models_FirewallRule = z.infer<typeof models_FirewallRuleSchema>;

export const models_FirewallStatusSchema = z.object({
  enabled: z.boolean(),
  rule_count: z.number().int(),
  table_name: z.string()
});
export type models_FirewallStatus = z.infer<typeof models_FirewallStatusSchema>;

export const models_LogResponseSchema = z.object({
  action: z.string(),
  created_at: z.string(),
  details: z.string(),
  id: z.number().int(),
  level: z.string(),
  service_group: z.string(),
  user_id: z.number().int()
});
export type models_LogResponse = z.infer<typeof models_LogResponseSchema>;

export const models_GetLogsResponseSchema = z.object({
  logs: z.array(models_LogResponseSchema),
  page: z.number().int(),
  page_size: z.number().int(),
  total: z.number().int(),
  total_pages: z.number().int()
});
export type models_GetLogsResponse = z.infer<typeof models_GetLogsResponseSchema>;

export const models_HTTPErrorSchema = z.object({
  message: z.string()
});
export type models_HTTPError = z.infer<typeof models_HTTPErrorSchema>;

export const models_ServiceHealthSchema = z.object({
  error_count: z.number().int(),
  error_rate: z.number(),
  service_group: z.string(),
  status: z.string(),
  total_count: z.number().int()
});
export type models_ServiceHealth = z.infer<typeof models_ServiceHealthSchema>;

export const models_HealthMetricsResponseSchema = z.object({
  alerts: z.array(z.string()),
  overall_status: z.string(),
  period: z.string(),
  services: z.array(models_ServiceHealthSchema),
  timestamp: z.string()
});
export type models_HealthMetricsResponse = z.infer<typeof models_HealthMetricsResponseSchema>;

export const models_LogCountByHourSchema = z.object({
  hour: z.string(),
  log_count: z.number().int()
});
export type models_LogCountByHour = z.infer<typeof models_LogCountByHourSchema>;

export const models_LogLevelStatsSchema = z.object({
  count: z.number().int(),
  level: z.string(),
  percentage: z.number()
});
export type models_LogLevelStats = z.infer<typeof models_LogLevelStatsSchema>;

export const models_LogStatsResponseSchema = z.object({
  days: z.number().int(),
  levels: z.array(z.string()),
  service_groups: z.array(z.string()),
  since: z.string(),
  total: z.number().int()
});
export type models_LogStatsResponse = z.infer<typeof models_LogStatsResponseSchema>;

export const models_LoginSchema = z.object({
  password: z.string(),
  username: z.string()
});
export type models_Login = z.infer<typeof models_LoginSchema>;

export const models_MetricsPeriodSchema = z.object({
  days: z.number().int(),
  since: z.string(),
  until: z.string()
});
export type models_MetricsPeriod = z.infer<typeof models_MetricsPeriodSchema>;

export const models_ServiceStatsSchema = z.object({
  count: z.number().int(),
  percentage: z.number(),
  service_group: z.string()
});
export type models_ServiceStats = z.infer<typeof models_ServiceStatsSchema>;

export const models_MetricsResponseSchema = z.object({
  error_rate_by_service: z.array(models_ErrorRateByServiceSchema),
  log_count_by_hour: z.array(models_LogCountByHourSchema),
  log_level_distribution: z.array(models_LogLevelStatsSchema),
  period: models_MetricsPeriodSchema,
  service_group_distribution: z.array(models_ServiceStatsSchema)
});
export type models_MetricsResponse = z.infer<typeof models_MetricsResponseSchema>;

export const models_MountPointSchema = z.object({
  available: z.number().int(),
  device: z.string(),
  fs_type: z.string(),
  path: z.string(),
  total: z.number().int(),
  use_percent: z.number().int(),
  used: z.number().int()
});
export type models_MountPoint = z.infer<typeof models_MountPointSchema>;

export const models_ReorderRulesRequestSchema = z.object({
  chain: z.enum(["input", "forward", "output"]),
  handles: z.array(z.number().int())
});
export type models_ReorderRulesRequest = z.infer<typeof models_ReorderRulesRequestSchema>;

export const models_ServiceMetricsResponseSchema = z.object({
  days: z.number().int(),
  error_count: z.number().int(),
  error_rate: z.number(),
  level_distribution: z.array(models_LogLevelStatsSchema),
  service_group: z.string(),
  since: z.string(),
  total_logs: z.number().int()
});
export type models_ServiceMetricsResponse = z.infer<typeof models_ServiceMetricsResponseSchema>;

export const models_StorageDeviceSchema = z.object({
  mount_point: z.string(),
  name: z.string(),
  size: z.string(),
  size_bytes: z.number().int(),
  type: z.string(),
  usage_percent: z.number().int()
});
export type models_StorageDevice = z.infer<typeof models_StorageDeviceSchema>;

export const models_VMActionResponseSchema = z.object({
  message: z.string(),
  success: z.boolean()
});
export type models_VMActionResponse = z.infer<typeof models_VMActionResponseSchema>;

export const models_VirtualMachineSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  uuid: z.string()
});
export type models_VirtualMachine = z.infer<typeof models_VirtualMachineSchema>;

export const models_VirtualMachineWithInfoSchema = z.object({
  cpu_time_ns: z.number().int(),
  id: z.number().int(),
  max_mem_kb: z.number().int(),
  memory_kb: z.number().int(),
  name: z.string(),
  state: z.number().int(),
  uuid: z.string(),
  vcpus: z.number().int(),
  vnc_ip: z.string(),
  vnc_port: z.number().int()
});
export type models_VirtualMachineWithInfo = z.infer<typeof models_VirtualMachineWithInfoSchema>;

export const notifications_NotificationSettingSchema = z.object({
  config: z.string(),
  created_at: z.string(),
  enabled: z.boolean(),
  id: z.number().int(),
  notify_on_error: z.boolean(),
  notify_on_info: z.boolean(),
  notify_on_warn: z.boolean(),
  provider: z.string(),
  updated_at: z.string(),
  webhook_url: z.string()
});
export type notifications_NotificationSetting = z.infer<typeof notifications_NotificationSettingSchema>;

export const services_NotificationSettingRequestSchema = z.object({
  config: z.string(),
  enabled: z.boolean(),
  notify_on_error: z.boolean(),
  notify_on_info: z.boolean(),
  notify_on_warn: z.boolean(),
  provider: z.string(),
  webhook_url: z.string()
});
export type services_NotificationSettingRequest = z.infer<typeof services_NotificationSettingRequestSchema>;

export const user_CreateUserParamsSchema = z.object({
  email: z.string(),
  password: z.string(),
  role: z.string(),
  username: z.string()
});
export type user_CreateUserParams = z.infer<typeof user_CreateUserParamsSchema>;

export const user_UserSchema = z.object({
  created_at: z.string(),
  email: z.string(),
  id: z.number().int(),
  password: z.string(),
  role: z.string(),
  updated_at: z.string(),
  username: z.string()
});
export type user_User = z.infer<typeof user_UserSchema>;

export const user_UserSessionSchema = z.object({
  created_at: z.string(),
  id: z.number().int(),
  session_token: z.string(),
  updated_at: z.string(),
  user_id: z.number().int()
});
export type user_UserSession = z.infer<typeof user_UserSessionSchema>;

export const user_GetUserAndSessionByTokenRowSchema = z.object({
  user: user_UserSchema,
  user_session: user_UserSessionSchema
});
export type user_GetUserAndSessionByTokenRow = z.infer<typeof user_GetUserAndSessionByTokenRowSchema>;

export const user_UpsertUserParamsSchema = z.object({
  email: z.string(),
  password: z.string(),
  role: z.string(),
  username: z.string()
});
export type user_UpsertUserParams = z.infer<typeof user_UpsertUserParamsSchema>;

export const GetResponseSchema = z.record(z.string(), z.string());
export type GetResponse = z.infer<typeof GetResponseSchema>;

export const GetAuthLogoutResponseSchema = z.null();
export type GetAuthLogoutResponse = z.infer<typeof GetAuthLogoutResponseSchema>;

export const get_auth_oauth__provider__provider_paramSchema = z.string();
export type get_auth_oauth__provider__provider_param = z.infer<typeof get_auth_oauth__provider__provider_paramSchema>;

export const GetDocsSpecResponseSchema = z.record(z.string(), z.unknown());
export type GetDocsSpecResponse = z.infer<typeof GetDocsSpecResponseSchema>;

export const GetFirewallRulesResponseSchema = z.array(models_FirewallRuleSchema);
export type GetFirewallRulesResponse = z.infer<typeof GetFirewallRulesResponseSchema>;

export const PostFirewallRulesReorderResponseSchema = z.array(models_FirewallRuleSchema);
export type PostFirewallRulesReorderResponse = z.infer<typeof PostFirewallRulesReorderResponseSchema>;

export const delete_firewall_rules__handle__handle_paramSchema = z.number().int();
export type delete_firewall_rules__handle__handle_param = z.infer<typeof delete_firewall_rules__handle__handle_paramSchema>;

export const GetIsoResponseSchema = z.array(z.record(z.string(), z.unknown()));
export type GetIsoResponse = z.infer<typeof GetIsoResponseSchema>;

export const PostIsoInputSchema = z.any();
export type PostIsoInput = z.infer<typeof PostIsoInputSchema>;

export const PostIsoResponseSchema = z.record(z.string(), z.unknown());
export type PostIsoResponse = z.infer<typeof PostIsoResponseSchema>;

export const get_iso__filename__filename_paramSchema = z.string();
export type get_iso__filename__filename_param = z.infer<typeof get_iso__filename__filename_paramSchema>;

export const GetIsoFilenameResponseSchema = z.record(z.string(), z.unknown());
export type GetIsoFilenameResponse = z.infer<typeof GetIsoFilenameResponseSchema>;

export const delete_iso__filename__filename_paramSchema = z.string();
export type delete_iso__filename__filename_param = z.infer<typeof delete_iso__filename__filename_paramSchema>;

export const DeleteIsoFilenameResponseSchema = z.record(z.string(), z.unknown());
export type DeleteIsoFilenameResponse = z.infer<typeof DeleteIsoFilenameResponseSchema>;

export const get_iso__filename__download_filename_paramSchema = z.string();
export type get_iso__filename__download_filename_param = z.infer<typeof get_iso__filename__download_filename_paramSchema>;

export const GetIsoFilenameDownloadResponseSchema = z.any();
export type GetIsoFilenameDownloadResponse = z.infer<typeof GetIsoFilenameDownloadResponseSchema>;

export const get_logs_service_group_paramSchema = z.string();
export type get_logs_service_group_param = z.infer<typeof get_logs_service_group_paramSchema>;

export const get_logs_level_paramSchema = z.string();
export type get_logs_level_param = z.infer<typeof get_logs_level_paramSchema>;

export const get_logs_page_paramSchema = z.number().int();
export type get_logs_page_param = z.infer<typeof get_logs_page_paramSchema>;

export const get_logs_page_size_paramSchema = z.number().int();
export type get_logs_page_size_param = z.infer<typeof get_logs_page_size_paramSchema>;

export const get_logs_days_paramSchema = z.number().int();
export type get_logs_days_param = z.infer<typeof get_logs_days_paramSchema>;

export const delete_logs_cleanup_days_paramSchema = z.number().int();
export type delete_logs_cleanup_days_param = z.infer<typeof delete_logs_cleanup_days_paramSchema>;

export const get_logs_stats_days_paramSchema = z.number().int();
export type get_logs_stats_days_param = z.infer<typeof get_logs_stats_days_paramSchema>;

export const get_metrics_days_paramSchema = z.number().int();
export type get_metrics_days_param = z.infer<typeof get_metrics_days_paramSchema>;

export const get_metrics__service__service_paramSchema = z.string();
export type get_metrics__service__service_param = z.infer<typeof get_metrics__service__service_paramSchema>;

export const get_metrics__service__days_paramSchema = z.number().int();
export type get_metrics__service__days_param = z.infer<typeof get_metrics__service__days_paramSchema>;

export const GetQemuVirtualMachinesResponseSchema = z.array(models_VirtualMachineSchema);
export type GetQemuVirtualMachinesResponse = z.infer<typeof GetQemuVirtualMachinesResponseSchema>;

export const GetQemuVirtualMachinesInfoResponseSchema = z.array(models_VirtualMachineWithInfoSchema);
export type GetQemuVirtualMachinesInfoResponse = z.infer<typeof GetQemuVirtualMachinesInfoResponseSchema>;

export const get_qemu_virtual_machines__uuid__uuid_paramSchema = z.string();
export type get_qemu_virtual_machines__uuid__uuid_param = z.infer<typeof get_qemu_virtual_machines__uuid__uuid_paramSchema>;

export const get_qemu_virtual_machines__uuid__console_uuid_paramSchema = z.string();
export type get_qemu_virtual_machines__uuid__console_uuid_param = z.infer<typeof get_qemu_virtual_machines__uuid__console_uuid_paramSchema>;

export const get_qemu_virtual_machines__uuid__info_uuid_paramSchema = z.string();
export type get_qemu_virtual_machines__uuid__info_uuid_param = z.infer<typeof get_qemu_virtual_machines__uuid__info_uuid_paramSchema>;

export const post_qemu_virtual_machines__uuid__reboot_uuid_paramSchema = z.string();
export type post_qemu_virtual_machines__uuid__reboot_uuid_param = z.infer<typeof post_qemu_virtual_machines__uuid__reboot_uuid_paramSchema>;

export const post_qemu_virtual_machines__uuid__shutdown_uuid_paramSchema = z.string();
export type post_qemu_virtual_machines__uuid__shutdown_uuid_param = z.infer<typeof post_qemu_virtual_machines__uuid__shutdown_uuid_paramSchema>;

export const post_qemu_virtual_machines__uuid__start_uuid_paramSchema = z.string();
export type post_qemu_virtual_machines__uuid__start_uuid_param = z.infer<typeof post_qemu_virtual_machines__uuid__start_uuid_paramSchema>;

export const GetSettingsNotificationsResponseSchema = z.array(notifications_NotificationSettingSchema);
export type GetSettingsNotificationsResponse = z.infer<typeof GetSettingsNotificationsResponseSchema>;

export const get_settings_notifications__provider__provider_paramSchema = z.string();
export type get_settings_notifications__provider__provider_param = z.infer<typeof get_settings_notifications__provider__provider_paramSchema>;

export const delete_settings_notifications__provider__provider_paramSchema = z.string();
export type delete_settings_notifications__provider__provider_param = z.infer<typeof delete_settings_notifications__provider__provider_paramSchema>;

export const post_settings_notifications__provider__test_provider_paramSchema = z.string();
export type post_settings_notifications__provider__test_provider_param = z.infer<typeof post_settings_notifications__provider__test_provider_paramSchema>;

export const PostSettingsNotificationsProviderTestInputSchema = z.object({}).passthrough();
export type PostSettingsNotificationsProviderTestInput = z.infer<typeof PostSettingsNotificationsProviderTestInputSchema>;

export const PostSettingsNotificationsProviderTestResponseSchema = z.record(z.string(), z.string());
export type PostSettingsNotificationsProviderTestResponse = z.infer<typeof PostSettingsNotificationsProviderTestResponseSchema>;

export const GetStorageDevicesResponseSchema = z.array(models_StorageDeviceSchema);
export type GetStorageDevicesResponse = z.infer<typeof GetStorageDevicesResponseSchema>;

export const GetStorageMountPointsResponseSchema = z.array(models_MountPointSchema);
export type GetStorageMountPointsResponse = z.infer<typeof GetStorageMountPointsResponseSchema>;

export const GetUsersResponseSchema = z.array(user_UserSchema);
export type GetUsersResponse = z.infer<typeof GetUsersResponseSchema>;

export const get_users__id__id_paramSchema = z.number().int();
export type get_users__id__id_param = z.infer<typeof get_users__id__id_paramSchema>;

export const put_users__id__id_paramSchema = z.number().int();
export type put_users__id__id_param = z.infer<typeof put_users__id__id_paramSchema>;

export const PutUsersIdInputSchema = z.object({
  email: z.string(),
  role: z.string(),
  username: z.string()
});
export type PutUsersIdInput = z.infer<typeof PutUsersIdInputSchema>;

export const delete_users__id__id_paramSchema = z.number().int();
export type delete_users__id__id_param = z.infer<typeof delete_users__id__id_paramSchema>;

export const patch_users__id__role_id_paramSchema = z.number().int();
export type patch_users__id__role_id_param = z.infer<typeof patch_users__id__role_id_paramSchema>;

export const PatchUsersIdRoleInputSchema = z.object({
  role: z.string()
});
export type PatchUsersIdRoleInput = z.infer<typeof PatchUsersIdRoleInputSchema>;
