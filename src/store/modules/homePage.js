import {RECEIVE_CATEGORYS,RECEIVE_HOMEINFO} from "../mutations-types";
import {reqCategory,reqHome} from '../../api'

const state = {
  categorys: {},
  homePages:{},
}

const mutations = {
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_HOMEINFO](state,homePages){
    state.homePages=homePages
  }
}
const actions = {
  async getCategorys({commit},callback) {
    const result = await reqCategory()
    console.log(result)
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
    typeof callback ==="function" && callback()
  },
  async getHomeInfo({commit}) {
    const result = await reqHome()
    console.log(result)
    if (result.code === 0) {
      commit(RECEIVE_HOMEINFO, result.data)
    }
  },

}
const getters={
  getLimit(state){
    return state.homePages.flashSaleModule
  },
  getGoodsList(state){
    return state.homePages.categoryModule
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
