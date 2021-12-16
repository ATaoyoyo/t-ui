import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
const routes = [
  {
    title: '按钮',
    path: '/button',
    name: 'button',
    component: () => import(`../package/button/docs/README.md`),
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
