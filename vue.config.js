module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  publicPath: './',
  devServer: {
    open: true,
    compress: true,
    proxy: {
      '/basicinfo': {
        // target: 'http://172.165.206.60:8000', // Leone
        target: 'http://172.165.206.134:8000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}
