import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import BANNER from '../components/banner.vue'
import shopList from '../components/shop/shopList.vue'
import shopType from '@/components/shop/shopType.vue'
import uers from '@/components/uers/uers.vue'
import mendian from '@/components/xitongshezhi/mendian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: 'BANNER',
        component: BANNER
      },
      {
        path: 'shopList',
        component: shopList
      },
      {
        path: 'shopType',
        component: shopType
      },
      {
        path: 'uers',
        component: uers
      },
      {
        path: 'mendian',
        component: mendian
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
