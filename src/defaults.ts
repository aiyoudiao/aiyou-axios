/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 11:11:44
 * @LastEditTime: 2019-09-19 15:13:29
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig } from './types/index';
import { processHeaders } from './helpers/header';
import { transformRequest, transformResponse } from './helpers/data';

const defaults: AxiosRequestConfig = {
  url: 'test',
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data);
      return transformRequest(data);
    }
  ],

  transformResponse: [
    function(data: any): any {
      return transformResponse(data);
    }
  ]
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
