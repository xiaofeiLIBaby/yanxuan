import { RECEIVE_CLASSIFY} from "../mutations-types";
import {reqClassify} from "../../api";

const state={
  classify:[]
}
const mutations = {
  [RECEIVE_CLASSIFY](state,classify){
    state.classify=classify
  }
}
const actions = {
  async getClassify({commit},callback) {
    const result = await reqClassify()
    if (result.code === 0) {
      commit(RECEIVE_CLASSIFY, result.data)
    }
    typeof callback ==="function" && callback()
  }

}
export default {
  state,
  mutations,
  actions,
}
