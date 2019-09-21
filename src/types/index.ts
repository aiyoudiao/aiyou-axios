import InterceptorManager from '../core/InterceptorManager';

/*
 * @Descripttion: 存放一些接口规格的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:19:20
 * @LastEditTime: 2019-09-21 15:04:20
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
  url?: string;
  method?: Method;
  data?: any;
  params?: any;
  headers?: any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;

  [propName: string]: any;

  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];

  cancelToken?: CancelToken;

  withCredentials?: boolean;

  xsrfCookieName?: string;
  xsrfHeaderName?: string;

  onDownloadProgress?: (e: ProgressEvent) => void;
  onUploadProgress?: (e: ProgressEvent) => void;

  auth?: AxiosBaseCredentials;

  validateStatus?: (status: number) => boolean;

  paramsSerializer?: (params: any) => string;
}

export interface AxiosBaseCredentials {
  username: string;
  password: string;
}

/**
 * @description	Axios 转换器接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface AxiosTransformer
 */
export interface AxiosTransformer {
  (data: any, headers?: any): any;
}

/**
 * @description	取消的实例类型的接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface CancelToken
 */
export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;

  throwIfRequested(): void;
}

/**
 * @description 取消方法的接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface Canceler
 */
export interface Canceler {
  (message?: string): void;
}

/**
 * @description	CancelToken 类构造函数参数的接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface CancelExecutor
 */
export interface CancelExecutor {
  (cancel: Canceler): void;
}

/**
 * @description	CancelToken 类静态方法 source 函数的返回值数据格式接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface CancelTokenSource
 */
export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

/**
 * @description	CancelTokenStatic 则作为 CancelToken 类的类接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface CancelTokenStatic
 */
export interface CancelTokenStatic {
  new (executor: CancelExecutor): CancelToken;
  source(): CancelTokenSource;
}

/**
 * @description	Cancel 是实例类型的接口定义
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface Cancel
 */
export interface Cancel {
  message?: string;
}

/**
 * @description	CancelStatic 是类类型的接口定义
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface CancelStatic
 */
export interface CancelStatic {
  new (message?: string): Cancel;
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
  defaults: AxiosRequestConfig;
  interceptors: Interceptors;

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
 * @description	Axios 静态方法扩展的接口
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @interface AxiosStatic
 * @extends {AxiosInstance}
 */
export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;

  CancelToken: CancelTokenStatic;
  Cancel: CancelStatic;
  isCancel: (value: any) => boolean;
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

/**
 * @description	拦截器集 接口
 * @author ilovejwl
 * @date 2019-09-19
 * @interface Interceptors
 */
export interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>;
  response: InterceptorManager<AxiosResponse>;
}

/**
 * @description	Promise 链接口
 * @author ilovejwl
 * @date 2019-09-19
 * @interface PromiseChain
 */
export interface PromiseChain {
  resolved: ResolvedFn | ((config: AxiosRequestConfig) => AxiosPromise);
  rejected?: RejectedFn;
}
