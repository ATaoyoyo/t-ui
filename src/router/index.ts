import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes = [
  {
    title: '按钮',
    path: '/components/button',
    name: 'button',
    component: () => import('../demo/buttons.vue'),
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
