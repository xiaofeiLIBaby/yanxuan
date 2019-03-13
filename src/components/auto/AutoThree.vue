<template>
    <div class="wraper">
      <h3>{{item2.title}}</h3>
      <p>{{item2.subTitle}}</p>
      <div class="pic">
        <div v-for="(pic,index) in item2.itemList" :key="index">
        <img v-lazy="pic.itemUrl" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AutoThree",
      props:{
        item2:Object
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wraper
  h3
    height 46px
    font-size 32px
    font-weight bold
  p
    font-size 28px
    color grey
    margin-bottom 20px
    letter-spacing 4px
    line-height 40px

  .pic
    display flex
    flex-wrap wrap
    div
      width 167px
      height 167px
      margin-right 8px
      img
        width 167px
        height 167px



</style>
