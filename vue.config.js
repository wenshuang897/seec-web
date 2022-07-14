const { defineConfig } = require("@vue/cli-service");
let API = process.env.VUE_APP_API
console.log(API)
module.exports = defineConfig({
  transpileDependencies: true,
  "lintOnSave":false,
  devServer:{
    proxy:{ //代理
      "/api":{  //代表后台接口的别名
        target:API, //访问的后台接口
        changeOrigin:true,//允许跨域
        pathRewrite:{//重写路径
          "/api":""
        }
      }
    }
  }
});
