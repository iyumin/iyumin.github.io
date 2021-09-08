import { ENV } from '@/configs';

import axios, { AxiosRequestConfig } from 'axios';

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
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return config;
  }
);

export {
  apiV2
};