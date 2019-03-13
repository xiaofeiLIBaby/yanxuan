<template>
  <div class="login-wrapper">
    <HeaderPublic>
      <div slot="title" class="logo"></div>
    </HeaderPublic>
    <div class="content-wrapper"  v-if="$route.path === '/personal'">
      <div class="content-logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login-phone"  @click="$router.replace('/personal/phoneLogin')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="login-email" @click="$router.replace('/personal/emailLogin')">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱帐号登录</span>
      </div>
      <div class="register-phone">手机号快捷注册></div>
      <div class="login-other">
        <div class="wchat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="content-wrapper" style="background-color: white">
      <RouterView/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login-wrapper
    position fixed
    top 88px
    bottom 0
    width: 100%
    background-color: #F2F5F4
    .logo
      float left
      transform translateX(140px)
      width: 2.29333rem;
      height: .72rem;
      margin-left .8rem
      background-position: 0 -1.70667rem;
      display: inline-block;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
      background-repeat: no-repeat;
      background-size: 2.29333rem 5.6rem;

    .content-wrapper
      height: 100%
      text-align center
      .content-logo
        padding-top: 2.13333rem;
        padding-bottom: 2.13333rem;
        text-align center
        img
          width: 3.57333rem;
          height: 1.2rem;
      .login-phone
        width: 90%
        display inline-block
        margin .42667rem 0
        height: 1.25333rem;
        line-height: 1.25333rem;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        border-radius: 4px;
        .iconfont
          font-size .4rem
      .login-email
        width: 90%
        display inline-block
        margin-bottom .4rem
        height: 1.25333rem;
        line-height: 1.25333rem;
        text-align: center;
        font-size: .37333rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 4px
        .iconfont
          font-size .4rem
      .register-phone
        color: #333;
        font-size: .37333rem;
        text-align: center;
      .login-other
        margin-top 5rem
        font-size: .4rem;
        line-height: .53333rem;
        height: .53333rem;
        color: #7F7F7F;
        margin-left: .06667rem;
        display flex
        justify-content center
        .iconfont
          font-size: .48rem;
        .wchat
          width 2.33333rem
          border-right 2px solid
        .qq
          width 2.33333rem
          border-right 2px solid
        .weibo
          width 2.33333rem



</style>
