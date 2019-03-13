<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header-left">
        <div class="goHome" @click="$router.replace('/')">
          <i class="iconfont icon-zhuye"></i>
        </div>
      </div>

      <!--<div class="logo"></div>-->
      <slot name="title"></slot>
      <div class="header-right">
        <div class="goCart" @click="$router.replace('/cart')">
          <i class="iconfont icon-gouwuche1"></i>
        </div>
        <div class="goSearch" @click="$router.replace('/search')">
          <i class="iconfont icon-search"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header-wrapper
    overflow: hidden
    bottom-border-1px(#d9d9d9)
    position fixed
    left 0
    top 0
    z-index 200
    width: 100%
    height: 88px
    background-color #fafafa
    .header
      width: 100%;
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 100;
      background-color: #fafafa;
      -webkit-box-sizing: border-box;
      margin: auto;
      overflow: hidden;
      padding: .1rem .4rem 0 .4rem;
      text-align center

      .header-left
        float: left;
        height: 1rem;
        line-height 1rem
        padding-right: .02rem;
        text-align center
        .goHome
          float: left;

          .iconfont
            display: block;
            font-size .68rem


      .header-right
        float: right;
        height: 1rem;
        line-height 1rem
        padding-right: .02rem;
        text-align center

        .goCart
          float: right;

          .iconfont
            display: block;
            font-size .6rem

        .goSearch
          float: right;
          margin-right: .5rem;

          .iconfont
            display: block;
            font-size .6rem
</style>
