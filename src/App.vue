<template>
<div id="wraper">
  <router-view></router-view>
  <FooterNav v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
  import FooterNav from'./components/footer/FooterNav'
  export default {
  components: {
    FooterNav
  },
  mounted() {
    this.$store.dispatch('getHomeInfo')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  font-size 24px
</style>
