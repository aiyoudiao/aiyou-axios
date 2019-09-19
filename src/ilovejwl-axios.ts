/*
 * @Descripttion: axios 入口文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-12 07:12:11
 * @LastEditTime: 2019-09-19 11:57:15
 * @LastEditors: ilovejwl
 */
import { AxiosInstance, AxiosRequestConfig } from './types';
import Axios from './core/Axios';
import { extend } from './helpers/util';
import defaults from './defaults';

/**
 * @description	创建一个实例
 * @author ilovejwl
 * @date 2019-09-18
 * @returns {AxiosInstance}
 */
function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config);
  const instance = Axios.prototype.request.bind(context);

  extend(instance, context);

  return instance as AxiosInstance;
}

const axios = createInstance(defaults);

export default axios;
