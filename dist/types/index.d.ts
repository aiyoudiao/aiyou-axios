import { AxiosRequestConfig, AxiosPromise } from './types/index';
/**
 * @description	axios 入口
 * @author ilovejwl
 * @date 2019-09-17
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
declare function axios(config: AxiosRequestConfig): AxiosPromise;
export default axios;
