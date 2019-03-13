import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'lib-flexible/flexible'
import Vuex from 'vuex'
import './mock/mockServer'
import store from './store/index'
import Interval from './components/shouye/interval/Interval'
import LoginTemplate from './components/LoginTemplate/LoginTemplate'
import HeaderPublic from './components/headerPublic/HeaderPublic'
import error from '../static/error.jpg'
import loading from '../static/22.gif'
// 利用插件实现图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error,
  loading

})

Vue.config.productionTip = false
Vue.component('Interval',Interval)
Vue.component('LoginTemplate',LoginTemplate)
Vue.component('HeaderPublic',HeaderPublic)


new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  Vuex,
  store
})
