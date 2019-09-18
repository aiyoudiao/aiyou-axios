/*
 * @Descripttion: 实现Axios接口定义的公共方法 的文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 16:27:18
 * @LastEditTime: 2019-09-18 18:14:23
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosPromise, Axios as IAxios, Method } from '../types/index';
import dispatchRequest from './dispatchRequest';

/**
 * @description	Axios接口的实现类
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @class Axios
 * @implements {IAxios}
 */
export default class Axios implements IAxios {
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

    return dispatchRequest(config);
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
