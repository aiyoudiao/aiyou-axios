/*
 * @Descripttion: 相关辅助函数的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 08:43:31
 * @LastEditTime: 2019-09-20 14:46:07
 * @LastEditors: ilovejwl
 */
const toString = Object.prototype.toString;

/**
 * @description	是否为日期类型
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} val
 * @returns {val is Date}
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

/**
 * @description	是否为对象类型
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} val
 * @returns {val is Object}
 */
export function isObject(val: any): val is Object {
  /**
   * 1. 这种判断方式对于 FormData、ArrayBuffer 这些类型的判断也为 true
   */
  return val !== null && typeof val === 'object';
}

/**
 * @description	是否为一个正常的对象类型
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} val
 * @returns {val is Object}
 */
export function isPlainObject(val: any): val is Object {
  /**
   * 1. 这种判断方式对于 FormData、ArrayBuffer 这些类型的判断为 false
   */
  return toString.call(val) === '[object Object]';
}

/**
 * @description	是否为FormData对象
 * @author ilovejwl
 * @date 2019-09-20
 * @export
 * @param {*} val
 * @returns {boolean}
 */
export function isFormData(val: any): boolean {
  return typeof val !== 'undefined' && val instanceof FormData;
}

/**
 * @description	混入式继承
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @template T
 * @template U
 * @param {T} to
 * @param {U} from
 * @returns {(T & U)}
 */
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any;
  }
  return to as T & U;
}

/**
 * @description	递归合并
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @param {...any[]} objs
 * @returns {*}
 */
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null);

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key];
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val);
          } else {
            result[key] = deepMerge({}, val);
          }
        } else {
          result[key] = val;
        }
      });
    }
  });

  return result;
}
