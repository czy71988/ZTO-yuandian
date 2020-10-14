
// import { baseURL } from './src/utils/khg'
// console.log(baseURL)
const baseURL = 'http://test.bee.zk020.cn'
module.exports = {
  devServer: {
    proxy: {
      '/youmi-fresh': {
        target: baseURL,
        changeOrigin: true, // 是否改变源地址
        pathRewrite: {
          '^/temp': ''
        }
      }
    }
  }
}
