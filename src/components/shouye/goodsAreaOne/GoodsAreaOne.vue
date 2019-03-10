<template>
      <div class="selectionOne">
        <ul class="goodsList" v-if="flag">
          <li v-for="(item,index) in homePages.sceneLightShoppingGuideModule" :key="index">
            <span>{{item.styleItem.title}}</span>
            <span>{{item.styleItem.desc}}</span>
            <img :src="small" alt="" v-for="(small,index) in item.styleItem.picUrlList" :key="index">
          </li>
        </ul>
      </div>

</template>
<script>
  import {mapState} from 'vuex'
    export default {
    data(){
      return{
        flag:false
      }
    },
      computed: {
        ...mapState({
          homePages:state=>state.Homepages.homePages
        })
      },
      watch:{
        homePages(){
          if(this.homePages.sceneLightShoppingGuideModule){
            this.flag=true
          }
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.selectionOne
  height 616px
  .goodsList
    width 100%
    height 100%
    box-sizing border-box
    padding 10px 30px 30px 26px
    li
      box-sizing border-box
      width 342px
      height 284px
      background #F5F5F5
      float left
      margin 1px
      padding 20px 0 0 20px
      span
        display block
        &:first-child
          font-size 36px
        &:nth-child(2)
          font-size 24px
          color gray
          margin 10px 0
      img
        display block
        float left
        width 150px
        height 150px
        margin-right 2px
</style>
