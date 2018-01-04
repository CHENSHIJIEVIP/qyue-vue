<template>
  <div class="sports">
    <panel-list :sportsList="sportsList"></panel-list>
  </div>
</template>
<script>
  //导入panelList组件
  import panelList from '@/components/panelList';
  import {mapGetters} from "vuex";

  export default {
    components: {
      panelList
    },
    created() {
      if(this.sportsList.length==0){
        this.$store.dispatch("sportsList");
      }
    },
    computed: {
      ...mapGetters([
        "sportsList"
      ])
    }
  }
</script>
<style scoped lang="scss">
  @import '../../assets/css/function';
  .sports{
    margin-top: px2rem(200px);
  }
</style>
