import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store/index'
Vue.use(VueAxios, axios)
// 创建axios实例
const service = axios.create({
  baseURL: ' https://easy-mock.com/mock/5a45f7b3105bf467fbd51960/example',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  timeout: 10000 // 请求超时时间
})

service.interceptors.response.use(
  function (response) {
    store.dispatch('changeProgFinish')
    return Promise.resolve(response)
  },
  function (error) {
    // 请求错误则向store commit这个状态变化
    console.log(error)
    const httpError = {
      hasError: true,
      status: error.response.status,
      statusText: error.response.statusText
    }
    store.dispatch('changeProgFail', httpError)
    return Promise.reject(error)
  }
)

export default service
