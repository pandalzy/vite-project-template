import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupStore } from '@/store'

import '@/styles/main.css'


async function bootstrap() {
  const app = createApp(App)

  // Configure store
  setupStore(app)

  // Configure routing
  setupRouter(app)
  setupRouterGuard(router)
  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady()

  app.mount('#app', true)
}

bootstrap()

