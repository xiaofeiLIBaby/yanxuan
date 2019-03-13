<template>
  <div class="selectionTwo">

    <h2>私人订制</h2>
    <div class="swiperContainer">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in homePagesArr" :key="index">
            <div class="smallList" v-for="(smallItem,index) in item" :key="index">
              <img v-lazy="smallItem.listPicUrl" alt="">
              <div class="text">
                <span>{{smallItem.name}}</span>
                <span class="pri">￥{{smallItem.retailPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapState({
        homePages: state => state.Homepages.homePages
      }),

      homePagesArr() {
        const {homePages} = this
        let arr = []
        let smallArr = []
        if (homePages.personalShop) {
          homePages.personalShop.forEach(function (homePage) {
            if (smallArr.length === 0) {
              arr.push(smallArr)
            }
            smallArr.push(homePage)
            if (smallArr.length === 3) {
              smallArr = []
            }
          })
        }
        console.log("1111", arr);
        return arr
      }
    },
    watch: {
      homePages() {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selectionTwo
    height 400px
    h2
      padding 0 30px
    .swiper-container
      height 350px
      .smallList
        float left
        width 216px
        height 300px
        margin 0 14px
        img
          width 216px
          height 216px
        .text
          text-align center
          letter-spacing 3px
          .pri
            color red
            padding 10px


</style>
