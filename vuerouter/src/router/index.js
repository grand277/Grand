// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home'
import about from '../components/about.vue'

// 1.通过use安装插件（插件都是用use安装的）
Vue.use(VueRouter)

// 2.创建vuerouter对象
const routes = [
    {
        path: '/home',
        component: home
    },
    {
        path: '/about',
        component: about
    }
]

const Router = new VueRouter({
    // 配置路由和组件之间的关系
    routes
})

// 将router对象传入vue实例中
export default Router