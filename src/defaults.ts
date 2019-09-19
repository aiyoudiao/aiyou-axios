/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 11:11:44
 * @LastEditTime: 2019-09-19 14:25:32
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig } from './types/index';

const defaults: AxiosRequestConfig = {
  url: 'test',
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
};

const methodsNoData = ['delete', 'get', 'head', 'options'];

methodsNoData.forEach(method => {
  defaults.headers[method] = {};
});

const methodsWithData = ['post', 'put', 'patch'];

methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
});

export default defaults;
