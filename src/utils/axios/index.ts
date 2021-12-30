import { ENV } from '@/configs';

import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

const apiV2 = axios.create();

let baseUrl: string;
if (process.env.NODE_ENV === 'development') {
  baseUrl = ENV.develop.api.v2BaseUrl;
} else {
  baseUrl = ENV.production.api.v2BaseUrl;
}

apiV2.defaults.baseURL = baseUrl;

apiV2.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
    return config;
  }
);

// retry auto, fix the keep-alive problem;
// see: https://zhuanlan.zhihu.com/p/86953757
axiosRetry(apiV2, { retries: 3});

export {
  apiV2
};