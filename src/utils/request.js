import axios from 'axios'
import baseURL from '../../vue.config'
// import { MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  timeout: 60000
})

// 请求拦截
service.interceptors.request.use(config => {
  if (process.env.NODE_ENV === 'production') {
    config.baseURL = baseURL
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use(res => {
  console.log(res)
  const data = res.data
  return data.success ? data.data : Promise.reject(new Error(data.msg))
}, err => {
  return Promise.reject(err)
})
