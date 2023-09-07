const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 整个项目禁用eslint
  lintOnSave: false
})
