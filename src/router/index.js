import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from'../pages/homePage/HomePage'
import Classify from '../pages/classify/Classify'
import Discern from '../pages/discern/Discern'
import Cart from '../pages/cart/Cart'
import Personal from '../pages/personal/Personal'
import CatList from '../pages/classify/CatList'
import Search from '../pages/search/Search'
import PhoneLogin from'../pages/personal/PhoneLogin'
import EmainLogin from '../pages/personal/EmailLogin'
import Tab from '../pages/discern/Tab'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/homePage'
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/homePage',
      component:HomePage,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/classify',
      component: Classify,
      meta:{
        showFooter:true
      },

      children:[
        {
          path:'/classify/catList',
          component:CatList,
          meta:{
            showFooter:true
          }
        }
      ]
    },

    {
      path:'/discern',
      component: Discern,
      meta:{
        showFooter:true
      },
       redirect: '/discern/tab0',
      children:[
        {
          path:'/discern/tab:id',
          component:Tab,
          meta:{
            showFooter:true
          },
        }
      ]
    },
    {
      path:'/cart',
      component: Cart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component: Personal,
      children: [
        {
          path:'/personal/phoneLogin',
          component:PhoneLogin
        },
        {
          path:'/personal/emailLogin',
          component:EmainLogin
        }
      ]
    },

  ]
})
