import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/ItemMusic',
    name: 'ItemMusic',
    component: () => import(/* webpackChunkName: "ItemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/infoUser',
    name: 'InfoUser',
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin || store.state.token || sessionStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import(/* webpackChunkName: "InfoUser" */ '../views/InfoUser.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//全局路由守卫
router.beforeEach((to, from) => {
  if (to.path == '/login') {
    store.state.isFooterMusic = false
    // console.log(store.state.isFooterMusic);
  } else {
    store.state.isFooterMusic = true
  }
  if(to.path == '/ItemMusic' || to.path == '/search'){
    // console.log(1111);
    store.state.tapbar = false
  }else{
    store.state.tapbar = true
  }
})


export default router
