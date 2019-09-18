/*
 * @Descripttion: 存放一些接口规格的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:19:20
 * @LastEditTime: 2019-09-18 12:13:47
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

export interface AxiosPromise extends Promise<AxiosResponse> {}
