/*
 * @Descripttion: 处理 url 相关的工具函数 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 08:43:00
 * @LastEditTime: 2019-09-21 15:29:45
 * @LastEditors: ilovejwl
 */
import { isDate, isObject, isPlainObject, isURLSearchParams } from './util';

/**
 * @description	对字符串进行编码
 * @author ilovejwl
 * @date 2019-09-18
 * @param {string} val
 * @returns {string}
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

/**
 * @description	构造url
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {string} url
 * @param {*} [params]
 * @returns
 */
export function buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string) {
  /**
   * 1. 判断params 是否为空
   * 2. 遍历一遍params中的key
   *    - 判断params中每一个key的value是否为null或者undefined
   *    - 取出params中每一个key的value，判断value是否为数组
   *      + 为数组，处理key和value，将key加上'[]'，给value赋值给一个数组的变量values
   *      + 不为数组，处理value，将value中每一项添加到values数组中
   *    - 遍历values数组中value
   *      + 判断value是否为日期类型，为日期类型就转换成ISO标准日期格式的字符串
   *      + 判断value是否为对象类型，为对象类型就JSON序列化为json字符串
   *      + 将key和value进行querystring的方式拼接放到一个parts寄存容器中去
   * 3. 将parts寄存容器中的querystring通过&拼接成一个完整的querystrings
   * 4. 判断url是否包含hash标记'#'
   *    - 有hash标记， 去掉url中带hash的这部分字符串内容
   *    - 将url和querystrings通过?进行正确的拼接
   * 5. 返回拼接完成后的url
   */

  if (!params) {
    return url;
  }

  let serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    const parts: string[] = [];

    Object.keys(params).forEach(key => {
      let val = params[key];
      if (val === null || typeof val === 'undefined') {
        return;
      }

      let values: string[];
      if (Array.isArray(val)) {
        values = val;
        key += '[]';
      } else {
        values = [val];
      }

      values.forEach(val => {
        if (isDate(val)) {
          val = val.toISOString();
          // } else if (isObject(val)) {
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val);
        }
        parts.push(`${encode(key)}=${encode(val)}`);
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

interface URLOrigin {
  protocol: string;
  host: string;
}

const urlParsingNode = document.createElement('a');
const currentOrigin = resolveURL(window.location.href);

export function isURLSameOrigin(requestURL: string): boolean {
  const parsedOrigin = resolveURL(requestURL);

  return (
    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host
  );
}

function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url);

  const { protocol, host } = urlParsingNode;

  return { protocol, host };
}
