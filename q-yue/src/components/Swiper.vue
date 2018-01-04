<template>
  <div id="swiperBox">
  <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index" class="wrap-slide">
        <img :src="slide" alt="">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'swiperBox',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay:true,
          loop:true,
          pagination: '.swiper-pagination',
          // paginationClickable: true,
        },
        swiperSlides: [
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1516535429,2470293438&fm=27&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2017532968,1410992746&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=23846173,2313854519&fm=27&gp=0.jpg'
          // './src/assets/images/banner02.jpg'
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/css/function';
  .wrap-slide{
    width: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: px2rem(1800px);
  }

  @media screen and (max-width: 500px) {
    img{
      display: block;
      width: 100%;
      height: px2rem(1200px);
    }
  }

</style>
