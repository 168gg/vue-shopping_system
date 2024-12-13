import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
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
    component: () => import('../views/MyView.vue')
  },
  {
    path:"/",
    name:"login",
    component:()=>import('../views/LoginView.vue')
  },{
    path:"/more",
    name:"more",
    component:()=>import("../views/MoreView.vue")
  },
  {
    path:'/goods',
    name:'goods',
    component:()=>import("../views/Goodsview.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
