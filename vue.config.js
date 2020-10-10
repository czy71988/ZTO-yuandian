const baseURL = ''

module.exports = {
  devServer: {
    proxy: {
      '/zkurtg-red-api': {
        target: baseURL,
        changeOrigin: true // 是否改变源地址
        // pathRewrite: {
        //   // '^/temp1': ''
        // }
      }
    }
  }
}

export default baseURL
