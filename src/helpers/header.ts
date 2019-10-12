/*
 * @Descripttion: 处理headers的辅助函数 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 10:41:55
 * @LastEditTime: 2019-09-19 13:54:34
 * @LastEditors: ilovejwl
 */
import { isPlainObject, deepMerge } from './util';
import { Method } from '../types';

/**
 * @description	规范headers中的键值对命名
 * @author ilovejwl
 * @date 2019-09-18
 * @param {*} headers
 * @param {string} normalizedName
 * @returns {void}
 */
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return;
  }

  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
}

/**
 * @description	处理headers
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} headers
 * @param {*} data
 * @returns {*}
 */
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type');

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }

  return headers;
}

/**
 * @description	解析 headers
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {string} headers
 * @returns {*}
 */
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null);
  if (!headers) {
    return parsed;
  }

  // headers.split('\r\n').forEach(line => {
  //   let [key, val] = line.split(':');
  //   key = key.trim().toLowerCase();
  //   if (!key) {
  //     return;
  //   }
  //   if (val) {
  //     val = val.trim();
  //   }
  //   parsed[key] = val;
  // });
  headers.split('\r\n').forEach(line => {
    let [key, ...vals] = line.split(':');
    key = key.trim().toLowerCase();
    if (!key) {
      return;
    }

    let val = vals.join(':').trim();
    parsed[key] = val;
  });

  return parsed;
}

/**
 * @description	平级化headers
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @param {*} headers
 * @param {Method} method
 * @returns {*}
 */
export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers;
  }

  headers = deepMerge(headers.common, headers[method], headers);

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common'];

  methodsToDelete.forEach(method => {
    delete headers[method];
  });

  return headers;
}
