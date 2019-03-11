<template>
    <div>
      <div class="head">
        <i></i>
        <input type="text" placeholder="搜索商品">
        <span @click="$router.replace('/')">取消</span>
      </div>
      <div class="main">
        <p>热门搜索</p>
        <ul>
          <li>早春通勤穿搭</li>
          <li>按摩电器</li>
          <li>没事3折7.5折</li>
          <li>电动牙刷69元起</li>
          <li>早春通勤穿搭</li>
          <li>早春通勤穿搭</li>
          <li>早春通勤穿搭</li>
          <li>早春通勤穿搭</li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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
      width 580px
      height 56px
      background #eee
      margin 18px 30px
      border-radius 5px
      font-size 28px
      padding-left 60px
      outline none
    span
      position absolute
      top 18px
      right 30px
      text-align center
      height 56px
      line-height 56px
      font-size 28px


  .main
    margin-top 100px
    p
      width 690px
      height 60px
      margin 0 auto
      margin-top 30px
      line-height 60px
      font-size 28px
      color gray
    ul
      width 690px
      margin 0 auto
      display flex
      flex-wrap wrap
      li
        padding 8px
        border 1px solid gray
        margin 20px 20px
        font-size 28px
        color slategray
</style>
