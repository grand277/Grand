<template>
  <div class="tab-bar-item" @click="btnclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <!-- 这样用的原因的插槽是被替换的 -->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      link: String
    },
    data() {
      return {
        // isActive: true,
        // link: '/home'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) != -1
      }
    },
    methods: {
      btnclick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    /* 很多人写的tabbar高度是49 */
  }

  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
