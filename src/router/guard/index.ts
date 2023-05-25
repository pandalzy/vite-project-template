import type { Router } from 'vue-router';

import { createPermissionGuard } from "@/router/guard/permissionGuard";

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router);
}
