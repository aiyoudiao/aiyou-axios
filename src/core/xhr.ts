/*
 * @Descripttion: 发送请求的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:33:46
 * @LastEditTime: 2019-09-18 17:20:59
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index';
import { parseHeaders } from '../helpers/header';
import { createError } from '../helpers/error';

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
    const { data = null, url, method = 'get', headers, responseType, timeout } = config;

    const request = new XMLHttpRequest();

    if (responseType) {
      request.responseType = responseType;
    }

    if (timeout) {
      request.timeout = timeout;
    }

    request.open(method.toLowerCase(), url, true);

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 0) {
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
      // resolve(response);
      handleResponse(response);
    };

    request.onerror = function handleError() {
      // reject(new Error('Network Error.'));
      reject(createError('Network Error.', config, null, request));
    };

    request.ontimeout = function handleTimeout() {
      // reject(new Error(`Timeout of ${timeout} ms exceeded.`));
      reject(
        createError(`Timeout of ${timeout} ms exceeded.`, config, 'ECONNABORTED(连接中断)', request)
      );
    };

    Object.keys(headers).forEach(name => {
      if (data === null && name.toUpperCase() === 'content-type') {
        delete headers[name];
      } else {
        request.setRequestHeader(name, headers[name]);
      }
    });

    request.send(data);

    /**
     * @description	响应时的一些处理
     * @author ilovejwl
     * @date 2019-09-18
     * @param {AxiosResponse} response
     */
    function handleResponse(response: AxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        // reject(new Error(`Request failed with status code ${response.status}`));
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        );
      }
    }
  });
}
