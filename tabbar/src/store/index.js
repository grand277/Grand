import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    // 保存共享状态的一个地方
    counter: 1000
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    // 异步操作
  },
  getters: {
    // 类似于组件里的计算属性
    powerCounter(state) {
      return state.counter * state.counter
    }
  },
  modules: {
    // 划分模块
  }
})

// 3.导出store独享
export default store
