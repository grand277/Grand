<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="../assets/img/tabbar/home.svg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="../assets/img/tabbar/category.svg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/cart.svg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/cart_active.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/profile.svg" />
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../components/tabbar/TabBar.vue'
  import TabBarItem from '../components/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: {
      // MainTabBar,
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
