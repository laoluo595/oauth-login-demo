import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '/oauthRedirect',
    name: 'oauthRedirect',
    component: () => import('@/views/oauthRedirect'),
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('@/views/success'),
  }
]


const router =  new Router({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
