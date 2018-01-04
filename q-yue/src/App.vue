<template>
  <div id="app">
    <v-header :title="title"
              :menu-display="menuDisplay"
              :back-display="backDisplay"
              :map-display="mapDisplay"
              ></v-header>
    <router-view/>
    <nav-bar></nav-bar>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar'
import header from '@/components/header'
import {mapGetters, mapActions} from 'vuex'
import sidebar from "@/components/sidebar"

export default {
  name: 'app',
  components:{
    NavBar,
    'v-header': header,
    'v-sidebar': sidebar
  },
  data() {
    return {}
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'hideMenuSlide'
  },
  methods: {
    ...mapActions({setNavState: 'setNavState'}),
    // 隐藏MenuSlide
    hideMenuSlide() {
      this.setNavState(false)
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'showToast',
      'showAlert'
    ]),
    title() {
      // console.log(this.$route.path.split('/')[1]);
      //根据路由的path，返回title值
      switch (this.$route.path.split('/')[1]) {
        case '':
          return "Q约";
        case 'home':
          return "Q约";
        case 'running':
          return "约跑";
        case 'walking':
          return "约行";
        case 'mine':
          return "我的";
      }
    },
    //菜单按钮
    menuDisplay() {
      if (this.$route.path.split('/')[1] == 'home') {
        return false;
      }
      return this.$route.path.split('/').length > 2 ? false : true
    },
    //返回按钮
    backDisplay() {
      return this.$route.path.split('/').length > 2 ? true : false
    },
    //地图按钮
    mapDisplay () {
    if (this.$route.path.split('/')[1] == 'home') {
      return true
      }
        return false
      }
  }
}

</script>


<style lang="scss">
  @import './assets/css/function';
  //icon-font
  @font-face {
    font-family: 'icon';  /* project id 172436 */
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
  }

  .icon {
    font-family: "icon" !important;
    font-size: 18px;
    font-style: normal;
    color: #ffffff;
  }

  html, body {
    height: 100%;
  }

  a.active {
    text-decoration: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #F5F5F5;
    // margin-bottom: 50px;
    .content {
      padding-top: px2rem(100px);
      background: #F5F5F5;
    }
    .tabar {
      margin-bottom: px2rem(120px);
    }
    //渐变动效
    .slide-left-enter-active,
    .slide-left-leave-active {
      transition: all .1s ease-in;
      opacity: 1;
    }
    .slide-left-enter,
    .slide-left-leave-active {
      opacity: 0;
    }

    //左滑动效
    // .slide-left-enter-active {
    //   animation: slideLeft .3s;
    // }
  }

  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }


</style>
