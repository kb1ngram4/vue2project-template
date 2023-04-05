// axios 拦截器
import axios  from "axios"
import Vue from "vue"
Vue.prototype.$http = axios
// Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000/';//后端开发环境地址
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息
axios.defaults.timeout = 30000
// 请求拦截器
axios.interceptors.request.use(config=>{
    // 请求前可以做什么
    // loading start() //请求开启loading
    return config
  },error =>{
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(data=>{
    // 请求后可以做什么
    // loading.finish()//响应关闭loading
    console.log(data);
    return data
},error=>{
    return Promise.reject(error)
}
)
export default axios