/*
 * @Author: jweboy
 * @Date: 2020-02-06 11:00:42
 * @LastEditors  : jweboy
 * @LastEditTime : 2020-02-12 16:16:07
 */
import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

// export interface SspReuqestConfig extends AxiosRequestConfig {
//   /**
//    * 默认全局捕获❌
//    */
//   _error?: boolean;
// }
// 'https://jweboy.com/api/pet'
const config: AxiosRequestConfig = {
  baseURL: process.env.API || 'https://jweboy.com/api/pet',
  responseType: 'json',
  timeout: 10000,
  withCredentials: false, // 是否允许携带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function transformRequest(data) {
      return qs.stringify(data);
    },
  ],
  // paramsSerializer: params => {
  //   // format array: t=[a, b] => "t=a,b"
  //   return qs.stringify(params, { arrayFormat: 'comma' });
  // },
  _error: true, // 默认全局捕获❌
};

export default config;
