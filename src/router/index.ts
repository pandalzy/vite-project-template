import { createRouter, createWebHashHistory } from "vue-router"

import Layout from "@/layout/index.vue";
import { clearPending } from "@/utils/axiosCancel";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import('@/views/home/index.vue')
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/login/index.vue')
  },

  // {
  //   path: '/404',
  //   name: 'PageNotExist',
  //   component: () => import('@/views/PageNotExist/PageNotExist.vue'),
  // },
  // {
  //   path: "/:catchAll(.*)", // 不识别的path自动匹配404
  //   redirect: '/404',
  // },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  //在跳转路由之前，先清除所有的请求
  clearPending()
  // ...
  next()
})

export default router