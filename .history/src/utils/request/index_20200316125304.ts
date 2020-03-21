/*
 * @Author: jweboy
 * @Date: 2020-02-06 11:00:48
 * @LastEditors: jweboy
 * @LastEditTime: 2020-02-27 17:57:12
 */
import axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { message } from 'antd';
import { SspResponse } from '@/typings/common/response';
import { SUCCESS_CODE, INVALID_TOKEN_CODE, INVALID_SERVER_ERROR_CODE } from '@/contants/locale';
import router from 'umi/router';
// import { getOverflowOptions } from 'antd/lib/tooltip/placements';
// import { getRequestIdentify, removePending, pending } from './cancelToken';
import config, { SspReuqestConfig } from './config';
import storage from '../storage';

const instance = axios.create(config);
// const { CancelToken } = axios;

function waitForTimes(callback: () => void, time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      callback();
      resolve();
    }, time);
  });
}

// 请求拦截器
instance.interceptors.request.use(
  function reqHandler(config: SspReuqestConfig) {
    // const reqKey = getRequestIdentify(config, true);
    const user = storage.getItem('user');

    // cancel multiple request
    // removePending(reqKey, true);

    // cancel token
    // config.cancelToken = new CancelToken(cancel => {
    //   pending[reqKey] = cancel;
    // });

    // set token
    config.headers['ad-token'] = user?.token;

    return config;
  },
  function respHandler(err: Error) {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  async function reqHandler(res: AxiosResponse) {
    const { code, msg } = res.data;
    console.log('resp =>', res.data);
    // const reqKey = getRequestIdentify(res.config);

    // cancel multiple request
    // removePending(reqKey);

    // success
    if (code === SUCCESS_CODE) {
      return res.data;
    }

    // token is  valid
    if (code === INVALID_TOKEN_CODE) {
      await waitForTimes(() => {
        message.destroy();
        message.error('登录状态已失效，请重新登录');
        router.push('/login');
      }, 600);
      return res;
    }

    if (code === INVALID_SERVER_ERROR_CODE) {
      message.error(msg);

      return Promise.reject(res.data);
    }

    message.error(msg);
    return Promise.reject(res.data);
  },
  function respHander(err: AxiosError) {
    console.log(err);
    const { status } = err.response || {};
    console.log('err =>', err.response);

    let msg = '';
    const isTimeout = err.code === 'ECONNABORTED';
    if (err.message === 'Network Error') {
      msg = '网络错误，请稍候重试';
    } else if (isTimeout) {
      msg = '请求超时，请稍候重试';
    } else if (status === 500) {
      msg = '服务器错误';
    } else {
      msg = err.message;
    }
    message.error(msg);

    // cancel token without mssage tips
    // if (!axios.isCancel(err)) {}

    return Promise.reject(err);
  },
);

export const request = <T>(config: SspReuqestConfig) => {
  return instance.request<T>(config);
};
