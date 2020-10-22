import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import Login from '../views/Login.vue'
import BANNER from '../components/AdvertisingSettings/banner.vue'
import advertising from '../components/AdvertisingSettings/advertising.vue'
import shopList from '../components/shop/shopList.vue'
import Commodi from '../components/shop/Commodi.vue'
import shopType from '@/components/shop/shopType.vue'
import uers from '@/components/uers/uers.vue'
import mendian from '@/components/xitongshezhi/mendian.vue'
import wangidan from '@/components/xitongshezhi/wangidan.vue'
import zhongxin from '@/components/xitongshezhi/zhongxin.vue'
import uersorder from '@/components/order/uersorder.vue'
import ordergoods from '@/components/order/ordergoods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/BANNER',
        component: BANNER
      },
      {
        path: '/shopList',
        component: shopList
      },
      {
        path: '/shopType',
        component: shopType
      },
      {
        path: '/uers',
        component: uers
      },
      {
        path: '/mendian',
        component: mendian
      },
      {
        path: '/wangidan',
        component: wangidan
      },
      {
        path: '/zhongxin',
        component: zhongxin
      },
      {
        path: '/uersorder',
        component: uersorder
      },
      {
        path: '/ordergoods',
        component: ordergoods
      },
      {
        path: '/advertising',
        component: advertising
      },
      {
        path: '/Commodi',
        component: Commodi
      }
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
