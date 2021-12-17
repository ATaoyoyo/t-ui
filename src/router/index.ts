import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes = [
  {
    title: '按钮',
    path: '/components/button',
    name: 'button',
    component: () => import('../docs/button/index.vue'),
  },
]

const routerConfig = {
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to: any, from: any) {
    // ...
    if (to.path !== from.path) {
      return { top: 0 }
    }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router
