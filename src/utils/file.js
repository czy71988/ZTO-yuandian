
import Vue from 'vue'
import { orderStatus } from './commit'

// 订单状态过滤
Vue.filter('orderStatusFilter', val => {
  if (!val) return '--'
  let label = ''
  orderStatus.some(item => {
    if (item.value === val) {
      label = item.label
      return true
    }
  })
  return label
})
