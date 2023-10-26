import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component : ()=> import('../views/HomeView.vue')
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
    path : '/login',
    name : 'login',
    component : ()=> import('../views/LoginView.vue')
  },
  
  {
    path : '/Register',
    name : 'Register',
    component : ()=> import('../views/RegisterView.vue')
  },
  {
    path : '/AnimeDetail',
    name : 'AnimeDetail',
    component : ()=> import('../views/AnimeDetailView.vue')
  },
<<<<<<< HEAD
  {
    path : '/Logout',
    name : 'Logout',
    component : ()=> import('../views/HomeView.vue')
  },
  {
    path : '/Animeedit',
    name : 'Animeedit',
    component : ()=> import('../views/AnimeEditView.vue')
  },
  {
    path : '/animeadmin',
    name : 'animeadmin',
    component : ()=> import('../views/animeadminView.vue')
  },

 

=======
  
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
