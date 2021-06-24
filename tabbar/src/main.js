import Vue from 'vue'
// import App from './App'
import App from './App-vuex.vue'
import router from './router'
import store from './store/index.js'


Vue.config.productionTip = false

Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
