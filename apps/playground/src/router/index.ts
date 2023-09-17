//@ts-
import { createRouter, createWebHistory } from 'vue-router'
import { type RouteLocationNormalized } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      //@ts-ignore
      component: () => import('@/App.vue'),
    },
  ],
})

router.beforeEach((to: RouteLocationNormalized, from, next) => {
  if (process.env.NODE_ENV === 'development') {
  }
})

router.afterEach(() => {})
export default router
