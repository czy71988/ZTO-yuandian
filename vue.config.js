// const baseURL = 'fgdf'

module.exports = {
  devServer: {
    proxy: {
      '/zkurtg-red-api': {
        target: '',
        changeOrigin: true // 是否改变源地址
        // pathRewrite: {
        //   // '^/temp1': ''
        // }
      }
    }
  }
}

// export default baseURL
