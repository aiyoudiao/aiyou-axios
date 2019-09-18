/*
 * @Descripttion: 存放一些接口规格的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:19:20
 * @LastEditTime: 2019-09-18 18:09:53
 * @LastEditors: ilovejwl
 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

/**
 * @description	Axios请求配置接口
 * @author ilovejwl
 * @date 2019-09-17
 * @export
 * @interface AxiosRequestConfig
 */
export interface AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
  headers?: any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
}

/**
 * @description	Axios响应的数据格式接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface AxiosResponse
 */
export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request: any;
}

/**
 * @description	Axios的Promise规范接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface AxiosPromise
 * @extends {Promise<AxiosResponse>}
 */
export interface AxiosPromise extends Promise<AxiosResponse> {}

/**
 * @description	Axios的Error规范接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface AxiosError
 * @extends {Error}
 */
export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}

/**
 * @description	Axios 公开方法的规范接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface Axios
 */
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise;

  get(url: string, config?: AxiosRequestConfig): AxiosPromise;

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise;

  head(url: string, config?: AxiosRequestConfig): AxiosPromise;

  options(url: string, config?: AxiosRequestConfig): AxiosPromise;

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
}

/**
 * @description	Axios 的实例接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface AxiosInstance
 * @extends {Axios}
 */
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise;

  (url: string, config?: AxiosRequestConfig): AxiosPromise;
}
