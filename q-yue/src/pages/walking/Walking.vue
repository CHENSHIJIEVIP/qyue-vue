<template>
  <div class="travels">
    <travel-list :travelLists="travelsList"></travel-list>
  </div>
</template>
<script>
  import travelList from '@/components/travelList';
  import { mapGetters } from 'vuex';
  export default {
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
        // console.log(this.$store.state)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../assets/css/function';
  .travels {
    padding-top: 1px;
    margin-top: px2rem(200px);
  }
</style>
