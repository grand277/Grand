<template>
  <div id="tab-bar">
    <!-- 这个叫插槽 -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #F6F6F6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
  }
</style>
