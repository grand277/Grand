import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1.安装VueRouter
Vue.use(Router)

// 2.配置路由信息
const routes = [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]

// 3.创建路由对象
const router = new Router({
  mode: 'history',
  routes
})

// 4.导出
export default router
