import Vue from 'vue'
import Vuex from 'vuex'
import Homepages from './modules/homePage'
import Classify from './modules/classify'
import Discern from './modules/discern'
Vue.use(Vuex)
export default new Vuex.Store({
modules:{
  Homepages,
  Classify,
  Discern,
}
})
