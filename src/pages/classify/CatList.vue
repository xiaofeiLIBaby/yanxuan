<template>
    <div class="catList" v-show="classify.categoryL1List">
      <div class="banner" v-if="classify.currentCategory">
        <img :src="classify.currentCategory.wapBannerUrl" >
      </div>
      <ul>
        <li v-for="(item,index) in arrFor" :key="index">
          <img :src="item.bannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
    data(){
      return{
        arr:[]
      }
    },
      computed:{
        ...mapState({
          classify:state=>state.Classify.classify
        }),
        arrFor(){
          const id=this.$route.query.id*1
       if(this.classify.categoryL1List){
         this.arr=[]
         this.classify.categoryL1List.filter((item,index)=>{
           if(item.id===id){
             this.arr=this.arr.concat(item.subCateList)
           }
         })
         return this.arr
       }
        },

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.catList
  width 528px
  .banner
    width 100%
    height 192px
    margin-bottom 40px
    img
      width 100%
      height 100%
  ul
    list-style none
    padding 0
    marign 0
    display flex
    flex-wrap wrap
    li
      width 144px
      height 216px
      margin-right 32px
      img
        width 144px
        height 144px
</style>
