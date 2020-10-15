
import request from '../utils/request'

// 订单列表
export function InterfaceOrderList (data, catchConfig) {
  const req = request({
    method: 'get',
    url: '/youmi-fresh/admin/order/adminFindOrderInfo',
    data
  }, catchConfig)
  return req
}

// 订单查询接口
export function InterfaceQueryOrderList (data, catchConfig) {
  const req = request({
    method: 'get',
    url: '/youmi-fresh/admin/order/adminFindOrderDetailInfo',
    data
  }, catchConfig)
  return req
}
