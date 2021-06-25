<template>
  <div>
    <div class="iosBody">
      <img class="logo" src="@/assets/img/cop/logo_cn.png" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "cop_download",
    methods: {
      btnclick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .iosBody {
    background-image: url('../assets/img/cop/gp_background.jpg');
    background-repeat: repeat;
    background-size: 100%;
    height: 100vh;
  }

  .logo {
    width: 90px;
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%);
  }
</style>
