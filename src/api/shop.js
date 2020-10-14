
import request from '../utils/request'

// 类目列表
export function InterfaceCommodity (data, catchConfig) {
  const req = request({
    method: 'get',
    url: 'youmi-fresh/admin/category/query/page',
    data
  }, catchConfig)
  return req
}

// 添加类目
export function InterfaceAddCategory (data, catchConfig) {
  const req = request({
    method: 'post',
    url: '/youmi-fresh/admin/category/add',
    data
  }, catchConfig)
  return req
}

// 修改类目
export function InterfaceUpCategory (data, catchConfig) {
  const req = request({
    method: 'post',
    url: '/youmi-fresh/admin/category/update',
    data
  }, catchConfig)
  return req
}
