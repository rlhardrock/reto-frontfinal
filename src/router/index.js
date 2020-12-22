import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public: true
    }
  },
  ,
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: () => import(/* webpackChunkName: "catalogo" */ '../views/Catalogo.vue'),
    meta:{
      public: true
    }
  },
  ,
  {
    path: '/planes',
    name: 'Planes',
    component: () => import(/* webpackChunkName: "planes" */ '../views/Planes.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta:{
      public: true   /* auth: true */
    },
    children: [
      {
        path: 'categoria',
        name: 'Categoria',
        component: () => import(/* webpackChunkName: "Categoria" */ '../views/Categoria.vue'),
        meta:{
          public: true
        }
      },
      {
        path: 'articulo',
        name: 'Articulo',
        component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
        meta:{
          public: true
        }
      },
      {
        path: 'usuario',
        name: 'Usuario',
        component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
        meta:{
          public: true
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
