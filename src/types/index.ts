/*
 * @Descripttion: 存放一些接口规格的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:19:20
 * @LastEditTime: 2019-09-18 18:59:08
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
 * @template T
 */
export interface AxiosResponse<T = any> {
  data: T;
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
 * @extends {Promise<AxiosResponse<T>>}
 * @template T
 */
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

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
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
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
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}

/**
 * @description	Axios 拦截器管理接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface AxiosInterceptorManager
 * @template T
 */
export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number;
}

/**
 * @description	resolve函数的接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface ResolvedFn
 * @template T
 */
export interface ResolvedFn<T = any> {
  (val: T): T | Promise<T>;
}

/**
 * @description	reject函数接口
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @interface RejectedFn
 */
export interface RejectedFn {
  (error: any): any;
}
