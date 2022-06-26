const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 项目运行时候的端口号
    port: 5950,
    headers: {
      // 允许跨域访问子应用页面
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
    },
    host: '0.0.0.0',
    proxy: {
      ['/dev']: {
        target: `https://github.com/`,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          ['^' + '/dev']: ''
        }
      },
      ['/api']: {
        target: `https://api.github.com/`,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          ['^' + '/api']: ''
        }
      }
    }
  }
})
