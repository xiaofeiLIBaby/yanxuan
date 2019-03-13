<!--首页表格式的列表导航-->
<template>
    <section>
      <div class="tableContainer">
        <ul class="tableList" v-if="flag">
          <li v-for="(item,index) in homePages.kingKongModule.kingKongList" :key="index">
            <a href="javascript:''">
              <img v-lazy="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        flag:false,
      }
    },
    computed: {
        ...mapState({
          homePages:state=>state.Homepages.homePages
        })
    },
    mounted() {
      this.$store.dispatch('getHomeInfo')
    },
    watch:{
      homePages(){
        if(this.homePages.kingKongModule){
          this.flag = true
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.tableContainer
  /*width 100%*/
  height 342px
  padding 6px 20px
  .tableList
    display: flex
    flex-wrap wrap
    li
      width 110px
      height 156px
      padding-right 8px
      margin 0 10px 0 14px
      text-align center
      vertical-align middle
      a
        display block
        width 110px
        height 110px
        img
          width 100%
        span
          margin-top 10px
          display block
          width 110px
          height 36px
          text-align center
          color #000
</style>
