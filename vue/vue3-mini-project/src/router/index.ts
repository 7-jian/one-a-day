import {
  createRouter, // 用来新建路由实例
  createWebHashHistory, // 用来配置我们内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分
  Router, // 返回的 router 实例使用类型 Router 来定义
  RouteRecordRaw // 用户路由的配置使用 RouteRecordRaw 来定义
} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
