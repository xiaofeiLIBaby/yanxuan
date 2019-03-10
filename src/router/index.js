import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from'../pages/homePage/HomePage'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/homePage'
    },
    {
      path:'/homePage',
      component:'HomePage',
      meta:{
        showFooter:true
      }
    }
   /* {
      path: '/',
      redirect: '/msite'
    },*/
   /* {
      path: '/msite',
      component: Msite,
      meta:{
        showFooter:true
      }
    }*/
  ]
})
