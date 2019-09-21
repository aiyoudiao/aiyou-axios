/*
 * @Descripttion: 发送请求的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:33:46
 * @LastEditTime: 2019-09-21 14:09:00
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index';
import { parseHeaders } from '../helpers/header';
import { createError } from '../helpers/error';
import { isURLSameOrigin } from '../helpers/url';
import cookie from '../helpers/cookie';
import { isFormData } from '../helpers/util';

/**
 * @description	XMLHttpRequest对象
 * @author ilovejwl
 * @date 2019-09-17
 * @export
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  /**
   * 1. 创建一个 request 对象实例。
   * 2. 执行 request.open 方法初始化。
   * 3. configureRequest 配置 request 对象。
   * 4. addEvents 给 request 添加事件处理函数。
   * 5. processRequestHeaders 处理请求 headers。
   * 6. processCancel 处理请求取消逻辑。
   * 7. request.send 方法发送请求。
   */

  return new Promise((resolve, reject) => {
    const {
      data = null,
      url,
      method = 'get',
      headers,
      responseType,
      timeout,
      cancelToken,
      withCredentials,
      xsrfCookieName,
      xsrfHeaderName,
      onDownloadProgress,
      onUploadProgress,
      auth,
      validateStatus
    } = config;

    const request = new XMLHttpRequest();

    request.open(method.toLowerCase(), url!, true);

    configureRequest();

    addEvents();

    processRequestHeaders();

    processCancel();

    request.send(data);

    /**
     * @description	配置 request 对象
     * @author ilovejwl
     * @date 2019-09-20
     */
    function configureRequest(): void {
      if (responseType) {
        request.responseType = responseType;
      }

      if (timeout) {
        request.timeout = timeout;
      }

      if (withCredentials) {
        request.withCredentials = true;
      }
    }

    /**
     * @description	给 request 添加事件处理函数
     * @author ilovejwl
     * @date 2019-09-20
     */
    function addEvents(): void {
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
          createError(
            `Timeout of ${timeout} ms exceeded.`,
            config,
            'ECONNABORTED(连接中断)',
            request
          )
        );
      };

      if (onDownloadProgress) {
        request.onprogress = onDownloadProgress;
      }

      if (onUploadProgress) {
        // request.upload.onprogress = onDownloadProgress;
      }
    }

    /**
     * @description	处理请求 headers
     * @author ilovejwl
     * @date 2019-09-20
     */
    function processRequestHeaders(): void {
      if (isFormData(data)) {
        delete headers['Content-Type'];
      }

      if (auth) {
        headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password);
      }

      if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName) {
        console.log(`xsrf: ${xsrfCookieName}`);
        const xsrfValue = cookie.read(xsrfCookieName);
        console.log(`xsrfValue: ${xsrfValue}`);

        if (xsrfValue) {
          headers[xsrfHeaderName!] = xsrfValue;
        }
      }

      Object.keys(headers).forEach(name => {
        if (data === null && name.toUpperCase() === 'content-type') {
          delete headers[name];
        } else {
          request.setRequestHeader(name, headers[name]);
        }
      });
    }

    /**
     * @description	处理请求取消逻辑
     * @author ilovejwl
     * @date 2019-09-20
     */
    function processCancel(): void {
      if (cancelToken) {
        // tslint:disable-next-line: no-floating-promises
        cancelToken.promise.then(reason => {
          request.abort();
          reject(reason);
        });
      }
    }

    /**
     * @description	响应时的一些处理
     * @author ilovejwl
     * @date 2019-09-18
     * @param {AxiosResponse} response
     */
    function handleResponse(response: AxiosResponse) {
      // if (response.status >= 200 && response.status < 300) {
      if (!validateStatus || validateStatus(response.status)) {
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
