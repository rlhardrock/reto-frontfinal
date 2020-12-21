import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categoria',
    name: 'Categoria',
    
    component: () => import(/* webpackChunkName: "Categoria" */ '../views/Categoria.vue')
  },
  {
    path: '/articulo',
    name: 'Articulo',
    
    component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
