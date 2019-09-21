/*
 * @Descripttion: axios 入口文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-12 07:12:11
 * @LastEditTime: 2019-09-21 17:51:55
 * @LastEditors: ilovejwl
 */
import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from './types';
import Axios from './core/Axios';
import { extend } from './helpers/util';
import defaults from './defaults';
import mergeConfig from './core/mergeConfig';
import CancelToken from './cancel/CancelToken';
import Cancel, { isCancel } from './cancel/Cancel';

// /**
//  * @description	创建一个实例
//  * @author ilovejwl
//  * @date 2019-09-18
//  * @returns {AxiosInstance}
//  */
// function createInstance(config: AxiosRequestConfig): AxiosInstance {
//   const context = new Axios(config);
//   const instance = Axios.prototype.request.bind(context);

//   extend(instance, context);

//   return instance as AxiosInstance;
// }

/**
 * @description	创建一个实例
 * @author ilovejwl
 * @date 2019-09-18
 * @returns {AxiosStatic}
 */
function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config);
  const instance = Axios.prototype.request.bind(context);

  extend(instance, context);

  return instance as AxiosStatic;
}

const axios = createInstance(defaults);

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config));
};

axios.CancelToken = CancelToken;
axios.Cancel = Cancel;
axios.isCancel = isCancel;

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

axios.Axios = Axios;

export default axios;
