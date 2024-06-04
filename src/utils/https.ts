import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

nProgress.configure({
   showSpinner: false,
   speed: 100,
   template: `
    <div class="bar" role="bar">
      <div class="peg"></div>
      <div class="percent">0%</div> <!-- 添加了显示百分比的元素 -->
    </div>
    <div class="spinner" role="spinner">
      <div class="spinner-icon"></div>
    </div>
  `
})
// 创建axios实例
const instance = axios.create({
   baseURL: '/api', // 设置API的基础URL
});

// 请求拦截器
instance.interceptors.request.use(
   (config: AxiosRequestConfig):any => {
      // 可在请求发送前对config进行修改，如添加请求头等
      const headers = config.headers || {};
      headers['Authorization'] = 'Bxxx';
      config.headers = headers;
      nProgress.start()
      return config;
   },
   (error: AxiosError) => {
      // 处理请求错误
      nProgress.done()
      return Promise.reject(error);
   }
);

// 响应拦截器
instance.interceptors.response.use(
   (response: AxiosResponse) => {
      // 对响应数据进行处理
      nProgress.done()
      return response;
   },
   (error: AxiosError) => {
      // 处理响应错误
      nProgress.done()
      return Promise.reject(error);
   }
);


export default instance
