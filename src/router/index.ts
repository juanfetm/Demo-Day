import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import AboutView from '../views/AboutView.vue'
import UsuarioView from '../views/UsuarioView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Usuario',
    name: 'Usuarios',
    component: UsuarioView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
