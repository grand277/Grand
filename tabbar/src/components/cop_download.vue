<template>
  <div>
    <div>
      <img class="logo" src="@/assets/img/cop/logo_cn.png" />
      <img src="@/assets/img/cop/bg_cn.jpg" />
    </div>
    <div class="main" @click="btnclick()">
      <img src="@/assets/img/cop/download_cn.png" />
    </div>
    <div class="lang">
      <button @click="boxshow = !boxshow">{{ lang_data.name }}</button>
      <transition name="draw">
        <!--这里的name 和 css 类名第一个字段要一样-->
        <ul class="box" v-show="boxshow">
          <li v-for="i in langList" @click="lang_select(i)">
            {{ i.name }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "cop_download",
  data() {
    return {
      langList: [
        {
          value: "cn",
          name: "简体中文",
        },
        {
          value: "hk",
          name: "繁體中文",
        },
        {
          value: "en",
          name: "English",
        },
        {
          value: "vn",
          name: "Tiếng Việt",
        },
        {
          value: "th",
          name: "ภาษาไทย",
        },
      ],
      boxshow: false,
      lang_data: { value: "cn", name: "简体中文" },
    };
  },
  mounted() {
    for (let index = 0; index < this.langList.length; index++) {
      let element = this.langList[index];
      if (element.value == localStorage.lang) {
        this.lang_data = element;
      }
    }
  },
  methods: {
    lang_select(data) {
      this.boxshow = !this.boxshow;
      localStorage.lang = data.value;
      this.lang_data = data;
    },
    
  },
};
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

.lang {
  position: absolute;
  right: 7%;
  top: 3%;
}
.lang button {
  background-color: rgba(250, 250, 250, 0.2);
  /* padding: 6px 15px; */
  border-radius: 28px;
  border: none;
  height: 36px;
  min-width: 100px;
}
.box {
  height: 140px;
  overflow: hidden;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 5px;
  margin-top: 2px;
  padding: 4px 0;
  text-align: center;
  font-size: 14px;
  list-style-type: none;
}
.box li {
  padding: 4px 0;
}
.draw-enter-active,
.draw-leave-active {
  transition: all 1s ease;
}
.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
</style>
