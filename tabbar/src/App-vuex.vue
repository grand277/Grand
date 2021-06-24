<template>
  <div id="app">
    <div>
      <h2>{{message}}</h2>
      <h2>{{$store.state.counter}}</h2>
      <button @click="addition">+</button>
      <button @click="subtraction">-</button>

      <h1>
        <div>getters的数据</div>
        {{$store.getters.powerCounter}}
      </h1>

      <hello-vuex></hello-vuex>
    </div>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: "我是app组件",
        // counter: 0
      }
    },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>
  @import url("./assets/css/base.css");
</style>
