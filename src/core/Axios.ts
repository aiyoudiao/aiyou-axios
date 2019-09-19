/*
 * @Descripttion: 实现Axios接口定义的公共方法 的文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 16:27:18
 * @LastEditTime: 2019-09-19 10:20:28
 * @LastEditors: ilovejwl
 */
import {
  AxiosRequestConfig,
  AxiosPromise,
  Axios as IAxios,
  Method,
  AxiosResponse,
  ResolvedFn,
  RejectedFn
} from '../types/index';
import dispatchRequest from './dispatchRequest';
import InterceptorManager from './InterceptorManager';

/**
 * @description	拦截器集 接口
 * @author ilovejwl
 * @date 2019-09-19
 * @interface Interceptors
 */
interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>;
  response: InterceptorManager<AxiosResponse>;
}

interface PromiseChain {
  resolved: ResolvedFn | ((config: AxiosRequestConfig) => AxiosPromise);
  rejected?: RejectedFn;
}

/**
 * @description	Axios接口的实现类
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @class Axios
 * @implements {IAxios}
 */
export default class Axios implements IAxios {
  interceptors: Interceptors;

  constructor() {
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    };
  }

  // /**
  //  * @description	请求的方法
  //  * @author ilovejwl
  //  * @date 2019-09-18
  //  * @param {AxiosRequestConfig} config
  //  * @returns {AxiosPromise}
  //  * @memberof Axios
  //  */
  // request(config: AxiosRequestConfig): AxiosPromise {
  //   return dispatchRequest(config);
  // }

  // /**
  //  * @description	请求的方法
  //  * @author ilovejwl
  //  * @date 2019-09-18
  //  * @param {*} url
  //  * @param {*} [config]
  //  * @returns {AxiosPromise}
  //  * @memberof Axios
  //  */
  // request(url: any, config?: any): AxiosPromise {
  //   if (typeof url === 'string') {
  //     if (!config) {
  //       config = {};
  //     }
  //     config.url = url;
  //   } else {
  //     config = url;
  //   }

  //   return dispatchRequest(config);
  // }

  /**
   * @description	请求的方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {*} url
   * @param {*} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {};
      }
      config.url = url;
    } else {
      config = url;
    }

    const chain: PromiseChain[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ];

    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor);
    });

    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor);
    });

    let promise = Promise.resolve(config);

    while (chain.length) {
      const { resolved, rejected } = chain.shift()!;
      promise = promise.then(resolved, rejected);
    }

    return promise;
  }

  /**
   * @description	get方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config);
  }

  /**
   * @description	delete方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config);
  }

  /**
   * @description	head方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config);
  }

  /**
   * @description	options方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config);
  }

  /**
   * @description	post方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('post', url, data, config);
  }

  /**
   * @description	put方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('put', url, data, config);
  }

  /**
   * @description	patch方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns {AxiosPromise}
   * @memberof Axios
   */
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config);
  }

  /**
   * @private
   * @description 不需要传递data的请求方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {Method} method
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @returns
   * @memberof Axios
   */
  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    );
  }

  /**
   * @private
   * @description	需要传递data的请求方法
   * @author ilovejwl
   * @date 2019-09-18
   * @param {Method} method
   * @param {string} url
   * @param {*} [data]
   * @param {AxiosRequestConfig} [config]
   * @returns
   * @memberof Axios
   */
  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    );
  }
}
