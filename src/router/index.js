import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
  },
  {
    path: '/Pastelero',
    name: 'Pastelero',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero.vue')
  },
  {
    path: '/Tabla',
    name: 'Tabla',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tabla.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
