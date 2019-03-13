<template>
    <div class="discernWraper">
      <HeaderPublic>
        <div slot="title" class="title">
          <span>发现</span>
          <span>甄选家</span>
        </div>
      </HeaderPublic>
      <div class="navHead">
        <ul>
          <li :class="{active: +$route.params.id === index}" v-for="(item,index) in tabList" :key="index">
            <router-link :to="{path: '/discern/tab' + index}">
              <span>{{item.tabName}}</span>
            </router-link>y
          </li>
        </ul>
      </div>

        <router-view/>
    </div>
</template>
<script>
  import {mapState} from 'vuex'


    export default {
    data(){
      return{

      }
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
  .discernWraper
    padding-top 165px
    .title
      float left
      transform translateX(180px)
      letter-spacing 6px
      /*box-sizing border-box*/
      margin-top 20px
      span
        font-size 32px
        &:nth-of-type(1)
          color darkred
          font-weight bolder
          font-size 36px

    .navHead
      position fixed
      top -4px
      height 75px
      background #FAFAFA
      margin-top 90px
      border-top 2px solid #eee
      ul
        float left
        display flex
        padding-right 5px
        li
          height 75px
          font-size 28px
          text-align center
          line-height 75px
          span
            padding 10px 20px
            color grey
          &.active
            border-bottom 3px solid #B4282D
            span
              color #B4282D

</style>
