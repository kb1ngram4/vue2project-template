const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    /**自动打开浏览器 */ 
    open:false,
    /**使用代理 */
    proxy:{
      '/api':{
        target:"http://localhost:3000",
        secure: false,
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
