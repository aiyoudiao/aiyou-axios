/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:19:20
 * @LastEditTime: 2019-09-17 22:31:16
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
}
