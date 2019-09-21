/*
 * @Descripttion: 发送请求的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 16:27:53
 * @LastEditTime: 2019-09-21 16:14:46
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index';
import xhr from './xhr';
import { buildURL, isAbsoluteURL, combineURL } from '../helpers/url';
import { transformRequest, transformResponse } from '../helpers/data';
import { processHeaders, flattenHeaders } from '../helpers/header';
import transform from './transform';

/**
 * @description	请求的调度
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  throwIfCancellationRequested(config);

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
  // config.headers = transfromHeaders(config);
  // config.data = transformRequestData(config);
  config.data = transform(config.data, config.headers, config.transformRequest);
  config.headers = flattenHeaders(config.headers, config.method!);
}

/**
 * @description	转换 config中的url
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {string}
 */
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params, paramsSerializer, baseURL } = config;

  if (baseURL && !isAbsoluteURL(url!)) {
    url = combineURL(baseURL, url);
  }

  return buildURL(url!, params, paramsSerializer);
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
  // res.data = transformResponse(res.data);
  res.data = transform(res.data, res.headers, res.config.transformResponse);
  return res;
}

function throwIfCancellationRequested(config: AxiosRequestConfig): void {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
