<template>
  <div>
    <div>
      <img class="logo" src="@/assets/img/cop/logo_cn.png" />
      <img src="@/assets/img/cop/bg_cn.jpg" />
    </div>
    <div class="main" @click="btnclick()">
      <img src="@/assets/img/cop/download_cn.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "cop_download",
    methods: {
      btnclick() {
        // this.$router.replace('/CopDownloadIos')  // 替换
        this.$router.push('CopDownloadIos') // 进栈
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }

  .logo {
    width: 90px;
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%);
  }

  .main {
    /* width: 100%; */
    position: fixed;
    bottom: 0;
  }
</style>
