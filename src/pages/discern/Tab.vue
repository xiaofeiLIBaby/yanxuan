<template>
    <div>
      <div class="loopWrap">
        <div v-for="(item,index) in recommendData" :key="index" class="one">
          <ul class="list1">
            <li v-for="(item2,index) in item.topics">
              <Auto v-if="item2.style===1" :item2="item2"/>
              <AutoTwo v-if="item2.style===2" :item2="item2"/>
              <Interval/>
            </li>
          </ul>
        </div>
        <div v-for="(item,index) in autoData" :key="index" class="two">
          <ul class="list2">
            <li v-for="(item2,index) in item.topics" :key="index">
              <Auto v-if="item2.style===1" :item2="item2"/>
              <AutoTwo v-if="item2.style===2" :item2="item2"/>
              <AutoThree v-if="item2.style===3" :item2="item2"/>
              <AutoFour v-if="item2.style===4" :item2="item2"/>
              <Interval/>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'

  import Auto from '../../components/auto/Auto'
  import AutoTwo from '../../components/auto/AutoTwo'
  import AutoThree from '../../components/auto/AutoThree'
  import AutoFour from '../../components/auto/AutoFour'

  export default {
    components:{
      Auto,
      AutoTwo,
      AutoThree,
      AutoFour
    },
    computed:{
      ...mapState({
        tabList:state=>state.Discern.tabList,
        autoData:state=>state.Discern.autoData,
        recommendData:state=>state.Discern.recommendData
      })
    },
    mounted() {
      this.$store.dispatch('getTabList')
      this.$store.dispatch('getAutoData')
      this.$store.dispatch('getrecommendData')
    }
  
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loopWrap
    .one
      .list1
        box-sizing border-box
        li
          box-sizing border-box
          padding 25px
    .two
      box-sizing border-box
      .list2
        li
          box-sizing border-box
          padding 25px
</style>
