import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registr',
    name: 'registr',
    meta: {layout: 'empty'},
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/Record.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
