<template>
    <div id="runorwalk">
        <div class="navbar">
            <nav class="nav-box clearfix">
                <ul class="nav-bar">
                    <li class="nav-bar-item" v-for="(item,index) in tabs" :class="{changeStyle:index == num}" @click="tab(index)">{{item}}</li>
                </ul>
            </nav>
            <section class="scroll-list">
                <div class="travels" v-for="(itemCon,index) in tabContents" v-show="index == num">
                    <travel-list :travelLists="travelsList"></travel-list>
                    <!-- <div v-for="(datas,index) in data">
                        {{datas}}
                    </div> -->
                </div>
            </section>
        </div>
    </div>
  
</template>
<script>
  import travelList from '@/components/travelList';
  import { mapGetters } from 'vuex';
  export default {
    data() {
        return {
            tabs: ["约跑", "约行"],
            tabContents: ["内容一", "内容二"],
            num:0,
            data:[]
        }
    },
    methods: {
       tab(index){
           this.num = index
       }
    },
    components: {
      travelList
    },
    computed: {
      ...mapGetters([
        "travelsList"
      ])
    },
    created() {
      if (this.travelsList.length == 0) {
        this.$store.dispatch('travelsList');
        // console.log( typeof this.$store.state.travel)
        this.data = this.$store.state.travel
      }
        console.log(this.data)
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/css/function';
  .travels {
    // padding-top: 1px;
    // margin-top: px2rem(200px);
  }

  .navbar {
        .nav-box {
            position: fixed;
            top: 40px;
            z-index: 1;
            width: 100%;
            height: px2rem(240px);
            line-height: px2rem(240px);
            text-align: center;
            background: #fff;
            .nav-bar {
                display: flex;
                .nav-bar-item {
                    flex: 1;
                    font-size: 16px;
                }
                .nav-bar-active {
                    border-bottom: 3px solid #76D49B;
                    color: #76D49B;
                }
            }
        }
        .scroll-list {
            margin-top: px2rem(400px);
            background: #fff;
            padding-top: 15px;
        }
    }

    .changeStyle{
        border-bottom: 3px solid #76D49B;
        color: #76D49B;
    }
</style>



<!-- <template>
    <div id="runorwalk">
        <div class="navbar">
            <nav class="nav-box clearfix">
                <ul class="nav-bar">
                    <li class="nav-bar-item" v-for="(item,index) in tabs" :class="{changeStyle:index == num}" @click="tab(index)">{{item}}</li>
                </ul>
            </nav>
            <section class="scroll-list">
                <div v-for="(itemCon,index) in list" v-show="index == num"></div>
            </section>

            
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name:'runorwalk',
        data() {
            return {
                tabs: ["约跑", "约行"],
                tabContents: ["内容一", "内容二"],
                num:0,
                list:[]
            }
        },
        created(){
            this.$store.dispatch('travelsList');
            console.log(this.$store.state.travel)
            this.list = this.$store.state.travel
        },
        computed: {
            ...mapGetters([
                "travelsList"
            ])
        },
        methods: {
           tab(index){
                   this.num = index
           }
        },
        mounted() {
            
        }
    }

</script>

<style lang="scss" scoped>
    
</style> -->