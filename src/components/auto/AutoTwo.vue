<template>
    <div class="wraper">
      <div class="left">
        <img :src="item2.avatar" alt="">
        <span class="name">{{item2.nickname}}</span>
        <div class="title">
          {{item2.title}}
        </div>
        <p>{{item2.subTitle}}</p>
        <span class="see">{{item2.readCount}}人看过</span>
      </div>
      <div class="right">
        <img v-lazy="item2.picUrl" alt="">
      </div>
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
  height 360px
  box-sizing border-box
  .left,.right
    float left
  .left
    width 425px
    img
      width 41px
      height 41px
      border-radius 50%
      margin-right 10px
    .name
      font-size 28px
    .title
      font-size 32px
      color rgba(0,0,0,.8)
      margin 20px 0
    p
      font-size 28px
      color gray
      margin 20px 0
    .see
      font-size 24px
      color dimgray
  .right
    box-sizing border-box
    width 200px
    img
      width 200px
      height 260px
</style>
