<template>
  <div class="travel-list">
    <div class="travel-list-head">
      <div class="head-l">
        <i class="icon">&#xe678;</i>
        <span>热门活动</span>
      </div>
      <div class="head-r">
        <router-link to="/travel">
          <i class="icon fr">&#xe7a7;</i>
        </router-link>
      </div>
    </div>
    <ul class="travel-ul">
      <li v-for="(item,index) in travelLists">
        <travel :travel="item"></travel>
      </li>
    </ul>
  </div>
</template>

<script>
  import travel from '@/components/travel';

  export default {
    props: ["travelLists"],
    components: {
      travel
    },
    data() {
      return {

      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/css/function';

  .travel-list {
    margin-top: px2rem(15px);
    background: #fff;
  }
  .travel-list-head {
    height: px2rem(180px);
    line-height: px2rem(220px);
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(100px) 0 px2rem(70px);
    // margin: 0 0 10px;
  
    .head-l{
      .icon {
        color: #F14343;
        font-size: px2rem(80px);
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
  .travel-ul{
    margin-bottom: px2rem(210px);
  }

</style>
