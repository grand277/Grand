import Vue from 'vue'
// import App from './App'
// import App from './App-vuex.vue'
// import App from './App-cop.vue'  // 下载页
import App from './App-axios.vue'  // 网络请求
import router from './router'
import store from './store/index.js'

import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   // url: 'httpbin.org',
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   // url: 'httpbin.org',
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   // get用params，post用data
//   params: {
//     type: 'sell', // pop
//     page: 2
//   }
// }).then(res => {
//   console.log(res)
// })

// defaults默认的参数
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// // category

// // axios发送并发请求
// axios.all([
//   axios({
//     url: "/home/multidata"
//   }),
//   axios({
//     baseURL: 'http://123.207.32.32:8000',
//     url: '/home/data',
//     timeout: 5000, // 超时时间 5S
//     params: {
//       type: 'pop',
//       page: 3
//     }
//   })
//   // ]).then(results => {
//   //   console.log(results)
//   // })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 4.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   // headers: {}
// })

// instance1({
//   url: '/category'
// }).then(res => {
//   console.log(res)
// })

// 5.封装request模块
import { request } from './network/request'

// 用法4
request({
  url: '/home/data'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
