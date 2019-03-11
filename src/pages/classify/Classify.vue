<template>
    <div class="wraper">
      <div class="head">
        <i></i>
        <input type="text" placeholder="搜索商品" @click="$router.replace('/search')">
      </div>
      <div class="wraper">
        <div class="navLeft">
          <ul>
            <li  :class="{active:index===isActive}" v-for="(item,index) in classify.categoryL1List" :key="index" @click="handleClick(index)">
              <router-link  :to="{path: '/classify/catList',query:{id:item.id}}">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="navRight">
          <keep-alive>
         <Router-view/>
            </keep-alive>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
    data(){
      return {
        isActive:0
      }
    },
      computed:{
        ...mapState({
          classify:state=>state.Classify.classify
        })
      },
      mounted() {
        this.$store.dispatch('getClassify',()=>{
          this.$nextTick(()=>{
          new BScroll('.navLeft',{
            click:true
          })
            new BScroll('.navRight',{
              click:true
            })
          })
        })

      },
      methods:{
        handleClick(index){
          this.isActive=index
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wraper
  box-sizing border-box
  padding-bottom 80px
  overflow hidden
.head
  position fixed
  z-index 1000
  top 0
  left 0
  height 90px
  width 100%
  background white
  i
    position absolute
    top 30px
    left 60px
    width 28px
    height 28px
    background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
  input
    box-sizing border-box
    display block
    width 675px
    height 56px
    background #eee
    margin 18px auto
    border-radius 5px
    font-size 28px
    padding-left 60px

.wraper
  display flex
  .navLeft
    width 162px
    margin-top 70px
    height 1044px
    ul
      padding-top 6px
      padding-left 4px
      margin-left -6px
      border-right 2px solid #eee
      li
        box-sizing border-box
        width 100%
        height 50px
        margin-top 45px
        text-align center
        line-height 50px
        &.active
          border-left 4px solid #AB2B2B
          color #AB2B2B
        &.active a
          color #AB2B2B
          a
            display block
            color #7e8c8d
            font-size 28px
            width 100%
            height 100px
          .router-link-active
            color #AB2B2B
            -webkit-tap-highlight-color transparent
            border-left 6px solid #AB2B2B
  .navRight
    height 1024px
    box-sizing border-box
    margin-top 90px
    margin-left 40px


</style>
