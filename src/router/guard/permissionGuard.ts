import { useUserStoreWithOut } from '@/store/modules/user';
import { clearPending } from "@/utils/axiosCancel";
import type { Router } from 'vue-router';
const whitePathList = ['/login']

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  router.beforeEach((to, from, next) => {
    //在跳转路由之前，先清除所有的请求
    clearPending()
    // 验证是否登录
    if (whitePathList.includes(to.path)) {
      next()
      return;
    }
    const token = userStore.token;
    if (!token && to.path != '/login') {
      next(`/login?redirect=${to.path}`);
      return;
    }
    userStore.userInfo();
    next();
  })
}