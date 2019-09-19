/*
 * @Descripttion: 对请求数据和响应数据的处理 的文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-19 15:15:15
 * @LastEditTime: 2019-09-19 15:31:34
 * @LastEditors: ilovejwl
 */
import { AxiosTransformer } from '../types/index';

/**
 * @description	处理转换函数的调用逻辑
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @param {*} data
 * @param {*} headers
 * @param {(AxiosTransformer | AxiosTransformer[])} [fns]
 * @returns {*}
 */
export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data;
  }

  if (!Array.isArray(fns)) {
    fns = [fns];
  }

  fns.forEach(fn => {
    data = fn(data, headers);
  });

  return data;
}
