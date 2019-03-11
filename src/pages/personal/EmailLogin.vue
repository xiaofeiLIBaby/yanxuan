<template>
  <div>
    <LoginTemplate :loginInfo="loginInfo">
      <div class="getCode" slot="getCode">获取验证码</div>
      <div class="register" slot="register">注册账号></div>
    </LoginTemplate>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loginInfo: {
          type: this.$route.params.id, // 用于表示传入的是什么数据 1代表手机短信登录, 2代表手机密码登录 字符串类型
          accountPlace: '请输入注册邮箱号',
          pwdPlace: '请输入邮箱密码',
          leftInfo: '遇到问题?',
          rightInfo: '使用密码验证登录'
        },

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .getCode
    position absolute
    right 0
    top .5rem
    font-size .36rem
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    background: #fff;
    line-height: 0.75rem;
    border: 1px solid #333;
    border-radius: 10px;

  .register
    font-size: .37333rem;
    line-height: .53333rem;
    color: #333;
</style>
