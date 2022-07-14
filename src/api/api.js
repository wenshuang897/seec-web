// 配置统一api文件
import axios from 'axios'
let instance = axios.create({
    baseURL:"/api", //基准地址
    timeout:2000
})

// 去请求响应拦截
instance.interceptors.request.use(config => {
    config.headers.token ="werrjijjk"
    return config
})

instance.interceptors.response.use(response => {
    return response
})

export default instance