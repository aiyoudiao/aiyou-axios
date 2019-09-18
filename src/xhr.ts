/*
 * @Descripttion: 发送请求的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:33:46
 * @LastEditTime: 2019-09-18 14:17:40
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types/index';
import { parseHeaders } from './helpers/header';

/**
 * @description	XMLHttpRequest对象
 * @author ilovejwl
 * @date 2019-09-17
 * @export
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config;

    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    request.open(method.toLowerCase(), url, true);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText;
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      resolve(response);
    };

    Object.keys(headers).forEach(name => {
      if (data === null && name.toUpperCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });

    request.send(data);
  });
}
