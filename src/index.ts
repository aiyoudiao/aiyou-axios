/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 22:13:37
 * @LastEditTime: 2019-09-17 22:47:08
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig } from './types/index';
import xhr from './xhr';

/**
 * @description	axios 入口
 * @author ilovejwl
 * @date 2019-09-17
 * @param {AxiosRequestConfig} config
 */
function axios(config: AxiosRequestConfig) {
  xhr(config);
}

export default axios;
