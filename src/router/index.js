import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path:'/car',
    name: 'car',
    component: () => import('../views/CarView.vue')
  },
  {
    path:"/video",
    name:"video",
    component:()=>import('../views/VideoView.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/AboutView.vue')
  }
  // {
  //   path:"/"
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
