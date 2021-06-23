// 配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import home from '../components/home'
// import about from '../components/about.vue'
// import user from '../components/user.vue'

const home = () => import('../components/home')
const homeNews = () => import('../components/homeNews')
const homeMessage = () => import('../components/homeMessage')
const about = () => import('../components/about')
const user = () => import('../components/user')
const Profile = () => import('../components/Profile')

// 1.通过use安装插件（插件都是用use安装的）
Vue.use(VueRouter)

const home_chi = [{
		path: "news",
		component: homeNews,
	},
	{
		path: "Message",
		component: homeMessage,
	},
]

// 2.创建vuerouter对象
const routes = [{
		path: '',
		// component: home, // 没有的时候显示home
		redirect: 'home', // 重定向到home
		meta: {
			title: '首页'
		}
	},
	{
		path: '/home',
		component: home,
		children: home_chi,
		// meta: {
		// 	title: '我'
		// }
	},
	{
		path: '/about',
		component: about,
		meta: {
			title: '关于'
		}
	},
	{
		path: '/user',
		component: user,
		meta: {
			title: '用户'
		}
	},
	{
		path: '/user/:userId',
		component: user,
		meta: {
			title: '用户'
		}
	},
	{
		path: '/Profile',
		component: Profile,
		meta: {
			title: '档案'
		}
	}
]

const Router = new VueRouter({
	// 配置路由和组件之间的关系
	routes,
	mode: 'history', // 默认哈希，加个这个就用history
	linkActiveClass: 'active'
})

// 前置守卫（前置钩子）（guard）
Router.beforeEach((to, from, next) => {
	// 从from跳转到to
	// document.title = to.meta.title
	document.title = to.matched[0].meta.title
	next()
})

// 后置钩子（hook）
// Router.afterEach((to, from) => {
// 	console.log("1111111111")
// })

// 将router对象传入vue实例中
export default Router
