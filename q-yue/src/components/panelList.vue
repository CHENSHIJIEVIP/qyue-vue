<template>
  <div class="travel-list">
    <div class="travel-list-head">
      <div class="head-l">
        <i class="icon">&#xe678;</i>
        <span>最新热门</span>
      </div>
      <div class="head-r">
        <router-link to="">
          <i class="icon fr">&#xe7a7;</i>
        </router-link>
      </div>
    </div>
 
    <panel v-for="(item,index) in sportsList" :sport="item" :key="index"></panel>
     

  </div>

</template>

<script>
  import panel from '@/components/panel';

  export default {
    props: ["sportsList"],
    components: {
      panel
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/function';

  .travel-list {
    margin-top: px2rem(15px);
  }
  .travel-list-head {
    height: px2rem(220px);
    line-height: px2rem(220px);
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(60px);
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
    .head-l {
      .icon {
        color: #F14343;
        font-size: px2rem(90px);
        vertical-align: middle;
        padding-right: 3px;
      }
    }
    .head-r {
      width: px2rem(80px);
      text-align: right;
      .icon {
        color: #555;
      }
    }
  }

</style>

