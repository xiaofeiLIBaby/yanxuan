<template>
    <div class="selectionTwo">

      <h2>私人订制</h2>
      <div class="swiperContainer">
        <div class="swiper-container" ref="swiperContainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homePagesArr" :key="index">
              <div class="smallList" v-for="(smallItem,index) in item" :key="index">
                <img :src="smallItem.listPicUrl" alt="">
                <span>{{smallItem.name}}</span>
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
    data(){
      return{

      }
    },

      computed:{
        ...mapState({
          homePages:state => state.Homepages.homePages
        }),

        homePagesArr() {
          const {homePages}=this
          let arr = []
          let smallArr = []
          if(homePages.personalShop){
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
          console.log("1111",arr);
          return arr
        }
      },
      watch: {
        homePages() {
          this.$nextTick(() => {
            new Swiper(this.$refs.swiperContainer, {
              pagination: {
                el: '.swiper-pagination',
              }
            })
          })
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selectionTwo
    width 100%
    height 493px
    .swiperContainer
      width 100%
      height 393px
      .swiper-slide
        display flex
        justify-content space-around
        .smallList
          width 216px
          height 317px
          img
            width 216px
            height 216px


</style>
