/*
 * @Descripttion: axios入口文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:13:37
 * @LastEditTime: 2019-09-18 12:45:27
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest, transformResponse } from './helpers/data';
import { processHeaders } from './helpers/header';

/**
 * @description	axios 入口
 * @author ilovejwl
 * @date 2019-09-17
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config).then(res => {
    return transformResponseData(res);
  });
}

/**
 * @description	处置 config
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.headers = transfromHeaders(config);
  config.data = transformRequestData(config);
}

/**
 * @description	转换 config中的url
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {string}
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return buildURL(url, params);
}

/**
 * @description	转换请求时 config 中的data
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {*}
 */
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}

/**
 * @description	转换 config 中的headers
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {*}
 */
function transfromHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}

/**
 * @description	转换响应时 的data
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosResponse} res
 * @returns {AxiosResponse}
 */
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data);
  return res;
}

export default axios;
