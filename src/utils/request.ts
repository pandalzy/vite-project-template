import { useUserStoreWithOut } from "@/store/modules/user";
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import axios from "axios";

const service = axios.create({
  // 请求的 base 地址
  baseURL: import.meta.env.VITE_BASE_API_URL?.toString(),
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
  timeout: 1000,
});

const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '未找到(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}


service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    // addPending(config) // 将当前请求添加到 pending 中
    const userStore = useUserStoreWithOut();
    if (userStore.token) {
      const headers: AxiosRequestHeaders = config.headers || {}
      headers["Authorization"] = "Bearer " + userStore.token;
    }
    return config;
  },
  error => {
    console.log("request error:", error);
    return Promise.resolve(error);
  }
);

service.interceptors.response.use(
  response => {
    // removePending(response) // 在请求结束后，移除本次请求
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status)
      if (typeof response.data === 'string') {
        response.data = { msg }
      } else {
        response.data.msg = msg
      }
    }
    return response.data
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('repeated request: ' + error.message)
    } else {
      // handle error code
      // 错误抛到业务代码
      console.log("response error:", error);
    }
    return Promise.reject(error);
  }
);

export default service;