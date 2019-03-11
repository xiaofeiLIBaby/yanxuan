<template>
  <div id="wrap">
    <header>
      <div class="logo">
        <a href="http://m.you.163.com/">
          <h1></h1>
        </a>
        <i></i>
        <input type="text" placeholder="搜索商品" @click="$router.replace('/search')">
        <button>登录</button>
      </div>
      <div class="nav">
        <div class="listWrap">
          <ul class="navList" v-show="categorys">
            <li @click="handleToggle(index)" :class="{active:index===toggle}" v-for="(item,index) in categorys"
                :key="index">{{item.name}}
            </li>
          </ul>
        </div>
        <div class="item">
          <span class="iconfont icon-xiangxiajiantou"></span>
        </div>
      </div>
    </header>
    <SlideShow/>
    <div class="service">
      <ul>
        <li><i class="iconfont icon-anquantianchong"></i>网易自营品牌</li>
        <li><i class="iconfont icon-biaoqian"></i>30天无忧退货</li>
        <li><i class="iconfont icon-qian"></i>48小时快速退款</li>
      </ul>
    </div>
    <TableList/>
    <SmallBanner/>
    <GoodsAreaOne/>
    <GoodsAreaTwo/>
    <Interval/>
    <!--限时购-->
    <div class="limit" v-if="getLimit">
      <div class="timeWrap">
        <div>限时购</div>
        <div class="time">
          <span>03</span>:
          <span>11</span>:
          <span>05</span>
        </div>
        <div class="more">更多&gt</div>
      </div>
      <ul>
        <li v-for="(item,index) in getLimit.itemList" :key=index>
          <img :src="item.picUrl" alt="">
          <div>
            <span class="newColor">￥{{item.activityPrice}}</span>
            <del v-if="item.originPrice" class="oldColor">￥{{item.originPrice}}</del>
          </div>
        </li>
      </ul>
    </div>
    <Interval/>
    <div class="goodsList">
      <ul class="outList">
        <li v-for="(item,index) in getGoodsList" :key="index">
          <img :src="item.titlePicUrl" alt="">
          <div class="baseScrollWraper" :class="`scrollWraper${index}`">
            <ul class="insideList">
              <li v-for="(item2,index) in item.itemList" :key=index>
                <img :src="item2.listPicUrl" alt="">
                <span class="ellipsis">{{item2.name}}</span>
                <span class="sizeColor">￥{{item2.retailPrice}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <Statement/>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import SlideShow from '../../components/shouye/slideshow/Slideshow'
  import TableList from '../../components/shouye/tableList/TableList'
  import SmallBanner from '../../components/shouye/smallBanner/SmallBanner'
  import GoodsAreaOne from '../../components/shouye/goodsAreaOne/GoodsAreaOne'
  import GoodsAreaTwo from '../../components/shouye/goodsAreaTwo/GoodsAreaTwo'
  import Statement from '../../components/shouye/statement/Statement'
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        toggle: 0
      }
    },
    components: {
      SlideShow,
      TableList,
      SmallBanner,
      GoodsAreaOne,
      GoodsAreaTwo,
      Statement
    },
    mounted() {
      this.$store.dispatch('getCategorys',()=>{
        new BScroll('.listWrap', {
          scrollX: true,
          click: true
        })
      })
    },
    computed: {
      ...mapState({
        categorys: state => state.Homepages.categorys
      }),
      ...mapGetters(['getLimit', 'getGoodsList'])
    },

    methods: {
      handleToggle(index) {
        this.toggle = index
      }
    },
    watch:{
      getGoodsList(){
        this.$nextTick(()=>{
          for (let i = 0; i < this.getGoodsList.length; i++) {
            new BScroll(`.scrollWraper${i}`,{
              scrollX: true,
              click: true
            })
          }
        })


      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .active
    border-bottom 4px solid #b4282d

  #wrap
    padding-top 150px

    header
      box-sizing border-box
      width 100%
      position fixed
      top 0
      left 0
      background #fff
      z-index 1000
      height 148px
      padding 15px 30px 0 30px

      .logo
        display flex
        justify-content space-between

        a
          text-align center
          margin-top 5px

          h1
            width 138px
            height 40px
            background-image url("imgs/logo.png")
            background-repeat no-repeat

        input
          width 300px
          height 56px
          background #eee
          border-radius 14px
          color #000
          padding 0 70px
          margin 0 15px
          font-size 28px

        i
          position absolute
          top 28px
          left 205px
          width 28px
          height 28px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
          background-repeat no-repeat

        button
          width 74px
          height 40px
          font-size 24px
          border 1px solid #b4282d
          border-radius 10px
          color #b4282d
          background rgba(255, 255, 255, .5)
          margin-top 10px

      .nav
        position relative
        height 60px
        width 100%
        margin-top 20px

        .listWrap
          width 620px
          overflow hidden

          .navList
            white-space: nowrap
            box-sizing: border-box
            display flex
            float left

            li
              padding 15px 16px
              margin-left 22px

              &:nth-child(1)
                margin-left 0

        .item
          position absolute
          right 0
          top 10px
          font-size 32px

    .service
      /*width 750px*/
      /*height 72px*/
      box-sizing border-box
      overflow hidden
      /*padding 30px 30px*/

      ul
        color: #b4282d
        font-size 24px
        height 72px

        li
          height 72px
          text-align center
          line-height 72px
          float left
          padding-left 30px
          margin-right 20px

          i
            font-size 24px
            margin-right 8px


    .limit
      height 735px

      .timeWrap
        position relative
        display flex
        height 99px
        box-sizing border-box
        padding 30px 20px

        div
          font-size 28px
          letter-spacing 4px

        .time
          span
            width 20px
            background rgba(0, 0, 0, .8)
            padding 4px
            color #ffffff
            margin 0 5px

        .more
          position absolute
          top 30px
          right 20px

      ul
        box-sizing border-box
        padding-left 30px
        display flex
        flex-wrap wrap

        li
          width 216px
          height 318px
          margin-right 20px

          img
            width 216px
            height 216px
            background #eee

          > div
            padding 20px 20px
            box-sizing border-box

            .newColor
              color red

            .oldColor
              color gray

    .goodsList
      .outList
        li
          height 800px
          width 100%
          img
            width 100%
            height 400px

        .baseScrollWraper
          overflow hidden
          .insideList
            display flex
            flex-wrap nowrap
            float left
            li
              padding 30px
              flex-shrink 0
              width 200px
              height 320px
              img
                width 200px
                height 200px
                background #F4F4F4
              span
                display block
                margin-top 15px
              .sizeColor
                color red


</style>
