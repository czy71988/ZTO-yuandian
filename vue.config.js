const baseURL = 'https'

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
  },
  configureWebpack: {
    externals: {
      TMap: 'TMap'
    }
  }
}
