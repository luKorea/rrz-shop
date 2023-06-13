import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/front-home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/front-login/index.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('@/views/front-shopping/index.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/front-notice/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
