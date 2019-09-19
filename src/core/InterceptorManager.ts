/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 19:03:11
 * @LastEditTime: 2019-09-19 09:21:02
 * @LastEditors: ilovejwl
 */
import { ResolvedFn, RejectedFn } from '../types/index';

interface Interceptor<T> {
  resolved: ResolvedFn<T>;
  rejected?: RejectedFn;
}

/**
 * @description	拦截器管理类
 * @author ilovejwl
 * @date 2019-09-19
 * @export
 * @class InterceptorManager
 * @template T
 */
export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>;

  constructor() {
    this.interceptors = [];
  }

  /**
   * @description	追加函数
   * @author ilovejwl
   * @date 2019-09-18
   * @param {ResolvedFn<T>} resolved
   * @param {RejectedFn} [rejected]
   * @returns {number}
   * @memberof InterceptorManager
   */
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    });

    return this.interceptors.length - 1;
  }

  /**
   * @description	遍历函数来调用
   * @author ilovejwl
   * @date 2019-09-18
   * @param {(interceptor: Interceptor<T>) => void} fn
   * @memberof InterceptorManager
   */
  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor);
      }
    });
  }

  /**
   * @description	删除函数
   * @author ilovejwl
   * @date 2019-09-18
   * @param {number} id
   * @memberof InterceptorManager
   */
  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
}
