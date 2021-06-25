<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!--<main-tab-bar/>-->
  </div>
</template>

<script>
  // import TabBar from './components/tabbar/TabBar.vue'
  // import TabBarItem from './components/tabbar/TabBarItem.vue'
  // import MainTabBar from './components/MainTabBar'

  export default {
    name: 'App',
    components: {
      // MainTabBar,
      // TabBar,
      // TabBarItem
    }
  }
</script>

<style>
  @import url("./assets/css/base.css");
</style>
