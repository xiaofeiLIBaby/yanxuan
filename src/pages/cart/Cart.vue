<template>
    <div class="wraper">
      <header>
        <span>购物车</span>
        <div>领劵</div>
      </header>
      <div class="main">
        <div class="serve">
          <ul>
            <li>30天无忧退货</li>
            <li>48小时快速退款</li>
            <li>满88元免邮费</li>
          </ul>
        </div>
        <div class="car"></div>
        <div class="text">
          <div>去添加点什么吧</div>
          <button @click="$router.replace('/personal')">登录</button>
        </div>
      </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wraper
  width 100%
  background #F4F4F4
  box-sizing border-box
  position absolute
  top 0
  bottom 0
header
  position relative
  width 100%
  height 88px
  background #ffffff
  text-align center
  line-height 88px
  span
    font-size 38px
  div
    position absolute
    right 60px
    top 0
    font-size 32px
    color #B4282D
.main
  width 100%
  height 100%
  background #F4F4F4
  .serve
    ul
      display flex
      margin 30px 30px
      justify-content:space-around
      li
        color #7e8c8d
  .car
    width 248px
    height 248px
    background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
    background-repeat no-repeat
    margin 0 auto
    margin-top 375px
  .text
    div
      text-align center
      color #7e8c8d
    button
      display block
      width 480px
      height 92px
      background #B4282D
      color #ffffff
      margin 0 auto
      margin-top 40px
</style>
