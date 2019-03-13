import {RECEIVE_TABLIST,RECEIVE_AUTODATA,RECEIVE_RECOMMENDDATA} from "../mutations-types";
import {reqTab,reqAutoData,reqRecommendData} from "../../api";

const state={
  tabList:{},
  autoData:{},
  recommendData:{}
}
const mutations={
  [RECEIVE_TABLIST](state,tabList){
    state.tabList=tabList
  },
  [RECEIVE_AUTODATA](state,autoData){
    state.autoData=autoData
},
  [RECEIVE_RECOMMENDDATA](state,recommendData){
    state.recommendData=recommendData
  }
}
const actions={
  async getTabList({commit}){
    const result = await reqTab()
    if(result.code==='200'){
      commit(RECEIVE_TABLIST,result.data)
    }
  },
  async getAutoData({commit}){
    const result=await reqAutoData
    if(result.code==='200'){
      commit(RECEIVE_AUTODATA,result.data.result)
    }
  },
  async getrecommendData({commit}){
    const result=await reqRecommendData()
    if(result.code==='200'){
      commit(RECEIVE_RECOMMENDDATA,result.data)
    }
  }
}
export default {
  state,
  mutations,
  actions,
}
