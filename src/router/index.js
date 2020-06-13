import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout'),
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dm-dashboard')
  }
]

const router = new VueRouter({
  routes
})

export default router
