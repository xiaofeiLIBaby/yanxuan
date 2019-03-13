<template>
    <div class="wraper">
      <div>
        <img :src="item2.avatar" alt="">
        <span>{{item2.nickname}}</span>
      </div>
      <p class="title">{{item2.title}}</p>
      <img v-lazy="item2.picUrl" alt="">
      <p class="read">{{item2.readCount}}人看过</p>
    </div>
</template>
<script>
    export default {
      props:{
        item2:Object
      },

    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wraper
  overflowX: hidden
  div
    margin-bottom 30px
    height 45px
    line-height 45px
    img
      display block
      float left
      width 41px
      height 41px
      border-radius 50%
      margin-right 30px
    span
      display block
      float left
      font-size 28px
  .title
    font-size 32px
    color rgba(0,0,0,.8)
    margin-bottom 20px
  img
    width 640px
    height 388px
    margin-bottom 20px
  .read
    color gray
    margin-bottom 20px
</style>
