import { createRouter, createWebHashHistory } from "vue-router"


import Layout from "@/layout/index.vue";

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
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})