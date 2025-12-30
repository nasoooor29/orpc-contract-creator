import { oc } from "@orpc/contract";
import { z } from "zod";
import * as zodTypes from "./zod-types.gen";

const get = oc
  .route({ method: "GET", path: "/" })
  .output(zodTypes.GetResponseSchema);

const postAuthLogin = oc
  .route({ method: "POST", path: "/auth/login" })
  .input(zodTypes.models_LoginSchema)
  .output(zodTypes.user_GetUserAndSessionByTokenRowSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getAuthLogout = oc
  .route({ method: "GET", path: "/auth/logout" })
  .output(zodTypes.GetAuthLogoutResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getAuthMe = oc
  .route({ method: "GET", path: "/auth/me" })
  .output(zodTypes.user_GetUserAndSessionByTokenRowSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getAuthOauthProvider = oc
  .route({ method: "GET", path: "/auth/oauth/{provider}" })
  .input(z.object({
    provider: z.string()
  }))
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postAuthRegister = oc
  .route({ method: "POST", path: "/auth/register" })
  .input(zodTypes.user_UpsertUserParamsSchema)
  .output(zodTypes.user_GetUserAndSessionByTokenRowSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  CONFLICT: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getDocsRedoc = oc
  .route({ method: "GET", path: "/docs/redoc" });

const getDocsSpec = oc
  .route({ method: "GET", path: "/docs/spec" })
  .output(zodTypes.GetDocsSpecResponseSchema)
  .errors({
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getDocsSwagger = oc
  .route({ method: "GET", path: "/docs/swagger" });

const getFirewallRules = oc
  .route({ method: "GET", path: "/firewall/rules" })
  .output(z.array(zodTypes.models_FirewallRuleSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postFirewallRules = oc
  .route({ method: "POST", path: "/firewall/rules" })
  .input(zodTypes.models_CreateRuleRequestSchema)
  .output(zodTypes.models_FirewallRuleSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postFirewallRulesReorder = oc
  .route({ method: "POST", path: "/firewall/rules/reorder" })
  .input(zodTypes.models_ReorderRulesRequestSchema)
  .output(z.array(zodTypes.models_FirewallRuleSchema))
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const deleteFirewallRulesHandle = oc
  .route({ method: "DELETE", path: "/firewall/rules/{handle}" })
  .input(z.object({
    handle: z.coerce.number().int()
  }))
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getFirewallStatus = oc
  .route({ method: "GET", path: "/firewall/status" })
  .output(zodTypes.models_FirewallStatusSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getHealth = oc
  .route({ method: "GET", path: "/health" })
  .output(zodTypes.database_HealthSchema)
  .errors({
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getIso = oc
  .route({ method: "GET", path: "/iso" })
  .output(zodTypes.GetIsoResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postIso = oc
  .route({ method: "POST", path: "/iso" })
  .input(zodTypes.PostIsoInputSchema)
  .output(zodTypes.PostIsoResponseSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getIsoFilename = oc
  .route({ method: "GET", path: "/iso/{filename}" })
  .input(z.object({
    filename: z.string()
  }))
  .output(zodTypes.GetIsoFilenameResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const deleteIsoFilename = oc
  .route({ method: "DELETE", path: "/iso/{filename}" })
  .input(z.object({
    filename: z.string()
  }))
  .output(zodTypes.DeleteIsoFilenameResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getIsoFilenameDownload = oc
  .route({ method: "GET", path: "/iso/{filename}/download" })
  .input(z.object({
    filename: z.string()
  }))
  .output(zodTypes.GetIsoFilenameDownloadResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getLogs = oc
  .route({ method: "GET", path: "/logs" })
  .input(z.object({
    service_group: z.string().optional(),
    level: z.string().optional(),
    page: z.number().int().optional(),
    page_size: z.number().int().optional(),
    days: z.number().int().optional()
  }))
  .output(zodTypes.models_GetLogsResponseSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const deleteLogsCleanup = oc
  .route({ method: "DELETE", path: "/logs/cleanup" })
  .input(z.object({
    days: z.number().int().optional()
  }))
  .output(zodTypes.models_ClearOldLogsResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getLogsStats = oc
  .route({ method: "GET", path: "/logs/stats" })
  .input(z.object({
    days: z.number().int().optional()
  }))
  .output(zodTypes.models_LogStatsResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getMetrics = oc
  .route({ method: "GET", path: "/metrics" })
  .input(z.object({
    days: z.number().int().optional()
  }))
  .output(zodTypes.models_MetricsResponseSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getMetricsHealth = oc
  .route({ method: "GET", path: "/metrics/health" })
  .output(zodTypes.models_HealthMetricsResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getMetricsService = oc
  .route({ method: "GET", path: "/metrics/{service}" })
  .input(z.object({
    service: z.string(),
    days: z.number().int().optional()
  }))
  .output(zodTypes.models_ServiceMetricsResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getQemuVirtualMachines = oc
  .route({ method: "GET", path: "/qemu/virtual-machines" })
  .output(z.array(zodTypes.models_VirtualMachineSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postQemuVirtualMachines = oc
  .route({ method: "POST", path: "/qemu/virtual-machines" })
  .input(zodTypes.models_CreateVMRequestSchema)
  .output(zodTypes.models_VirtualMachineSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getQemuVirtualMachinesInfo = oc
  .route({ method: "GET", path: "/qemu/virtual-machines/info" })
  .output(z.array(zodTypes.models_VirtualMachineWithInfoSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getQemuVirtualMachinesUuid = oc
  .route({ method: "GET", path: "/qemu/virtual-machines/{uuid}" })
  .input(z.object({
    uuid: z.string()
  }))
  .output(zodTypes.models_VirtualMachineSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getQemuVirtualMachinesUuidConsole = oc
  .route({ method: "GET", path: "/qemu/virtual-machines/{uuid}/console" })
  .input(z.object({
    uuid: z.string()
  }));

const getQemuVirtualMachinesUuidInfo = oc
  .route({ method: "GET", path: "/qemu/virtual-machines/{uuid}/info" })
  .input(z.object({
    uuid: z.string()
  }))
  .output(zodTypes.models_VirtualMachineWithInfoSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postQemuVirtualMachinesUuidReboot = oc
  .route({ method: "POST", path: "/qemu/virtual-machines/{uuid}/reboot" })
  .input(z.object({
    uuid: z.string()
  }))
  .output(zodTypes.models_VMActionResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postQemuVirtualMachinesUuidShutdown = oc
  .route({ method: "POST", path: "/qemu/virtual-machines/{uuid}/shutdown" })
  .input(z.object({
    uuid: z.string()
  }))
  .output(zodTypes.models_VMActionResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postQemuVirtualMachinesUuidStart = oc
  .route({ method: "POST", path: "/qemu/virtual-machines/{uuid}/start" })
  .input(z.object({
    uuid: z.string()
  }))
  .output(zodTypes.models_VMActionResponseSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getSettingsNotifications = oc
  .route({ method: "GET", path: "/settings/notifications" })
  .output(z.array(zodTypes.notifications_NotificationSettingSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postSettingsNotifications = oc
  .route({ method: "POST", path: "/settings/notifications" })
  .input(zodTypes.services_NotificationSettingRequestSchema)
  .output(zodTypes.notifications_NotificationSettingSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getSettingsNotificationsProvider = oc
  .route({ method: "GET", path: "/settings/notifications/{provider}" })
  .input(z.object({
    provider: z.string()
  }))
  .output(zodTypes.notifications_NotificationSettingSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const deleteSettingsNotificationsProvider = oc
  .route({ method: "DELETE", path: "/settings/notifications/{provider}" })
  .input(z.object({
    provider: z.string()
  }))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postSettingsNotificationsProviderTest = oc
  .route({ method: "POST", path: "/settings/notifications/{provider}/test" })
  .input(z.object({
    provider: z.string(),
    body: zodTypes.PostSettingsNotificationsProviderTestInputSchema.optional()
  }))
  .output(zodTypes.PostSettingsNotificationsProviderTestResponseSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getStorageDevices = oc
  .route({ method: "GET", path: "/storage/devices" })
  .output(z.array(zodTypes.models_StorageDeviceSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getStorageMountPoints = oc
  .route({ method: "GET", path: "/storage/mount-points" })
  .output(z.array(zodTypes.models_MountPointSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getUsers = oc
  .route({ method: "GET", path: "/users" })
  .output(z.array(zodTypes.user_UserSchema))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const postUsers = oc
  .route({ method: "POST", path: "/users" })
  .input(zodTypes.user_CreateUserParamsSchema)
  .output(zodTypes.user_UserSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  CONFLICT: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getUsersId = oc
  .route({ method: "GET", path: "/users/{id}" })
  .input(z.object({
    id: z.coerce.number().int()
  }))
  .output(zodTypes.user_UserSchema)
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  NOT_FOUND: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const putUsersId = oc
  .route({ method: "PUT", path: "/users/{id}" })
  .input(z.object({
    id: z.coerce.number().int(),
    body: zodTypes.PutUsersIdInputSchema
  }))
  .output(zodTypes.user_UserSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const deleteUsersId = oc
  .route({ method: "DELETE", path: "/users/{id}" })
  .input(z.object({
    id: z.coerce.number().int()
  }))
  .errors({
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const patchUsersIdRole = oc
  .route({ method: "PATCH", path: "/users/{id}/role" })
  .input(z.object({
    id: z.coerce.number().int(),
    body: zodTypes.PatchUsersIdRoleInputSchema
  }))
  .output(zodTypes.user_UserSchema)
  .errors({
  BAD_REQUEST: {
    data: zodTypes.models_HTTPErrorSchema
  },
  UNAUTHORIZED: {
    data: zodTypes.models_HTTPErrorSchema
  },
  FORBIDDEN: {
    data: zodTypes.models_HTTPErrorSchema
  },
  INTERNAL_SERVER_ERROR: {
    data: zodTypes.models_HTTPErrorSchema
  }
});

const getWebsocket = oc
  .route({ method: "GET", path: "/websocket" });

export const contract = oc.router({
  general: {
    get,
  },
  accounts: {
    postAuthLogin,
    getAuthLogout,
    getAuthMe,
    getAuthOauthProvider,
    postAuthRegister,
  },
  documentation: {
    getDocsRedoc,
    getDocsSpec,
    getDocsSwagger,
  },
  firewall: {
    getFirewallRules,
    postFirewallRules,
    postFirewallRulesReorder,
    deleteFirewallRulesHandle,
    getFirewallStatus,
  },
  health: {
    getHealth,
  },
  iso: {
    getIso,
    postIso,
    getIsoFilename,
    deleteIsoFilename,
    getIsoFilenameDownload,
  },
  logs: {
    getLogs,
    deleteLogsCleanup,
    getLogsStats,
  },
  metrics: {
    getMetrics,
    getMetricsHealth,
    getMetricsService,
  },
  qemu: {
    getQemuVirtualMachines,
    postQemuVirtualMachines,
    getQemuVirtualMachinesInfo,
    getQemuVirtualMachinesUuid,
    getQemuVirtualMachinesUuidConsole,
    getQemuVirtualMachinesUuidInfo,
    postQemuVirtualMachinesUuidReboot,
    postQemuVirtualMachinesUuidShutdown,
    postQemuVirtualMachinesUuidStart,
  },
  settings: {
    getSettingsNotifications,
    postSettingsNotifications,
    getSettingsNotificationsProvider,
    deleteSettingsNotificationsProvider,
    postSettingsNotificationsProviderTest,
  },
  storage: {
    getStorageDevices,
    getStorageMountPoints,
  },
  users: {
    getUsers,
    postUsers,
    getUsersId,
    putUsersId,
    deleteUsersId,
    patchUsersIdRole,
  },
  websocket: {
    getWebsocket,
  },
});
