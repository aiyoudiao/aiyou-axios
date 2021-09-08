/*
 * @Descripttion: 提供合并发送请求的配置不同合并策略 的文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 12:03:37
 * @LastEditTime: 2019-10-15 20:58:07
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig } from '../types/index';
import { isPlainObject, deepMerge } from '../helpers/util';

const strats = Object.create(null);

/**
 * @description	默认合并策略
 * @author ilovejwl
 * @date 2019-09-19
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function defaultStrat(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1;
}

/**
 * @description	只接受自定义配置合并策略
 * @author ilovejwl
 * @date 2019-09-19
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function fromVal2Strat(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2;
  }
}

const stratKeysFromVal2 = ['url', 'params', 'data'];

stratKeysFromVal2.forEach(key => {
  strats[key] = fromVal2Strat;
});

/**
 * @description	复杂对象合并策略
 * @author ilovejwl
 * @date 2019-09-19
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2);
  } else if (typeof val2 !== 'undefined') {
    return val2;
  } else if (isPlainObject(val1)) {
    return deepMerge(val1);
  } else if (typeof val1 !== 'undefined') {
    return val1;
  } else {
    return val1;
  }
}

const stratKeysDeepMerge = ['headers', 'auth'];

stratKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStrat;
});

/**
 * @description	合并配置
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @param {AxiosRequestConfig} config1
 * @param {AxiosRequestConfig} config2
 * @returns {AxiosRequestConfig}
 */
export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {};
  }

  const config = Object.create(null);

  for (let key in config2) {
    mergeField(key);
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key);
    }
  }

  /**
   * @description	合并字段
   * @author ilovejwl
   * @date 2019-09-19
   * @param {string} key
   */
  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat;
    config[key] = strat(config1[key], config2![key]);
  }

  return config;
}
