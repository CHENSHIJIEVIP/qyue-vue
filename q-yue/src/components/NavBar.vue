<template>
  <div class="navBar" v-show="isShowNavBar">
    <!-- <div class="whiteBox"></div> -->
    <div class="navbox">
      <ul>
        <li v-for="(item,index) in navData">
            <router-link :to="item.path" :class = "$route.path == item.path ? 'activeColor' : '' ">
                {{item.name}}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navBar',
  data () {
    return {
      navData:[
        {name:"首页",path:"/home"},
        {name:"约跑",path:"/running"},
        {name:"约行",path:"/walking"},
        {name:"我的",path:"/mine"}
      ],
      // changeStyle:0
    }
  },
  methods:{
    changeColor(index){
      this.changeStyle=index
    }
  },
  computed:{
    //是否隐藏导航栏
    isShowNavBar(){
    let routeLength=this.$route.path.split("/").length;
    return routeLength >2 ? false :true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.whiteBox{
  height: 100px;
}

.navBar .navbox{
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.navBar .navbox ul li {
  display: inline-block;
  width: 25%;
  float: left;
  height: 50px;
  line-height: 50px;
}

.navBar .navbox ul li a {
  display: inline-block;
  width: 100%;
  height: inherit;
  text-align: center;
  color: black;
}

.activeColor{
  color: #76d49b !important;
}


</style>
