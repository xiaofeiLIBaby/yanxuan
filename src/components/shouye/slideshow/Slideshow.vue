<!--轮播图-->
<template>
  <div class="swiper-container pict">
    <ul class="swiper-wrapper">
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/4ebefa195803f5fa9596296867d0a93a.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/4ebefa195803f5fa9596296867d0a93a.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/4ebefa195803f5fa9596296867d0a93a.jpg?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
      <li class="swiper-slide">
        <a href="##">
          <img
            src="https://yanxuan.nosdn.127.net/ed3c5a043b801a9fd225b0ab4a30729b.png?imageView&quality=75&thumbnail=750x0"
            alt="">
        </a>
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        category: state => state.Homepages.categorys
      })
    },
    mounted() {
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pict
    width 100%

    ul
      width 100%
      height 400px

      li
        img
          width 100%
</style>
