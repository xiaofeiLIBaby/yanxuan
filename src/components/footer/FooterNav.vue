<template>
  <footer>
    <ul>
      <li @click="goTo('/')" :class="{on:$route.path==='/homePage'}">首页</li>
      <li @click="goTo('/classify/catList?id=1022001')" :class="{on:$route.path==='/classify/catList'}">分类</li>
      <li @click="goTo('/discern')" :class="{on:reg.test($route.path)}">识物</li>
      <li @click="goTo('/cart')" :class="{on:$route.path==='/cart'}">购物车</li>
      <li @click="goTo('/personal')">个人</li>
    </ul>
  </footer>

</template>
<script>

  export default {
    data(){
      return{
        reg:/discern/
      }
    },

    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  footer
    position fixed
    bottom 0
    left 0
    z-index 1000
    height 98px
    width 100%
    background #fff
    ul
      height 98px
      display flex
      justify-content space-between
      padding 0 40px
      border-top 1px solid #eee
      li
        text-align center
        &::before
          margin 10px auto
          content ''
          display block
          width 40px
          height 40px
          background-image url("imgs/icon.png")
          background-repeat no-repeat
        &:nth-child(1)
          &::before
            background-position 0 -252px
        &:nth-child(1).on
          &::before
            background-position 0 -200px
        &:nth-child(2)
          &::before
            background-position 0 -150px
        &:nth-child(2).on
          &::before
            background-position 0 -100px
        &:nth-child(3)
          &::before
            background-position 0 -352px
        &:nth-child(3).on
          &::before
            background-position 0 -300px
        &:nth-child(4)
          &::before
            background-position 0 -50px
        &:nth-child(4).on
          &::before
            background-position 0 0
        &:nth-child(5)
          &::before
            background-position 0 -451px

</style>
