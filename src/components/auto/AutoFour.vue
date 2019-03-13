<template>
  <div class="wrap">
    <h3>{{item2.title}}</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in item2.lookList" :key="index">
            <img v-lazy="item.picUrl" alt="">
          </div>
        </div>
      </div>

    </div>

</template>

<script>
  import Swiper from 'swiper'
    export default {
      props:{
        item2:Object
      },
      mounted() {
        this.$nextTick(()=>{
          let swiper = new Swiper('.swiper-container', {
            loop:true,
            effect : 'coverflow',
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 20,
              depth: 60,
              modifier: 3,
              slideShadows : true
            },
          });

        })
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    margin-bottom 20px
    h3
      font-size 34px
      padding 20px 20px
    .swiper-slide
      width 250pxpx
      overflow hidden
      margin-bottom 20px
      img
        width 250px
        height 249px

</style>
