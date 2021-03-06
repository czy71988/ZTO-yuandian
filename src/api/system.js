
import request from '../utils/request'

// 店铺列表
export function InterfaceShop (data, catchConfig) {
  const req = request({
    method: 'get',
    url: '/youmi-fresh/admin/shop/query/page',
    data
  }, catchConfig)
  return req
}

// 获取下拉列表
export function InterfaceDropdownList (data, catchConfig) {
  const req = request({
    method: 'get',
    url: '/youmi-fresh/admin/shop/getList',
    data
  }, catchConfig)
  return req
}

// 获取下拉列表
export function InterfaceDropdownlastList (data, catchConfig) {
  const req = request({
    method: 'get',
    url: '/youmi-fresh/admin/shop/getChilds',
    data
  }, catchConfig)
  return req
}

// 添加店铺
export function InterfaceAddShop (data, catchConfig) {
  const req = request({
    method: 'post',
    url: '/youmi-fresh/admin/shop/add',
    data
  }, catchConfig)
  return req
}

// 修改店铺 /youmi-fresh/admin/shop/update
export function InterfaceUpShop (data, catchConfig) {
  const req = request({
    method: 'post',
    url: '/youmi-fresh/admin/shop/update',
    data
  }, catchConfig)
  return req
}
