/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:33:46
 * @LastEditTime: 2019-09-17 22:39:30
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig } from './types/index';

/**
 * @description	XMLHttpRequest对象
 * @author ilovejwl
 * @date 2019-09-17
 * @export
 * @param {AxiosRequestConfig} config
 */
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config;

  const request = new XMLHttpRequest();

  request.open(method.toLowerCase(), url, true);

  request.send(data);
}
