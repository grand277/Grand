<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  // 生命周期函数，组件创建完执行
  created() {
    console.log("组件加载完了");
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
