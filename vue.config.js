const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,  // 设置你想要的端口号
    host: 'localhost',
    open: true,  // 启动后自动打开浏览器
    // 更多配置选项...
  }
})