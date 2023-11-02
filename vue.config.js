/*
 * @Author: niweixing
 * @Date: 2023-10-25 16:22:58
 * @LastEditors: niweixing
 * @LastEditTime: 2023-10-26 11:32:52
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 跨域配置
  devServer: {
    host: "localhost",
    port: "888",
    https: false,
    // 跨域配置
    proxy: {
      "/api": {
        target: "http://127.0.0.1:1024",
        changOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
