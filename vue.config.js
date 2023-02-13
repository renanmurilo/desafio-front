const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/main.scss";',
      },
    },
  },
  pwa: {
    name: 'Desafio front-end',
    themeColor: '#292d3e',
    msTileColor: '#292d3e',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
})
