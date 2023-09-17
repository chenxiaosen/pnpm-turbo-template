import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    sid?: string
  }
}
interface ISessionData {
  sid: string
}
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
})
// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      ...config.headers,
      xxx: '123', //自定义请求头信息
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)
// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  },
)
export default axiosInstance
