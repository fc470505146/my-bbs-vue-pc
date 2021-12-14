import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'App',
    component: () => import(/* webpackChunkName: "about" */ '@/App.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
