import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'lib-flexible/flexible'
import Vuex from 'vuex'
import './mock/mockServer'
import store from './store/index'
import Interval from './components/shouye/interval/Interval'
import LoginTemplate from './components/LoginTemplate/LoginTemplate'

Vue.config.productionTip = false
Vue.component('Interval',Interval)
Vue.component('LoginTemplate',LoginTemplate)
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  Vuex,
  store
})
