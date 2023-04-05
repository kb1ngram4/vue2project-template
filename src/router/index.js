import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      // requireAuth: false,
    },
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requireAuth: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 
router.beforeEach((to,from,next)=>{
  // 判断是否需要登录权限
  if(to.meta.requireAuth){
    // 检查session
    next({
      path: '/',
      // query: {
      //   redirect: to.fullPath
      // }
    })
  }else{
    next()
  }
})

export default router
