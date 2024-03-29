/*
 * @Descripttion: 规范Axios错误的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 15:12:19
 * @LastEditTime: 2019-10-15 21:53:57
 * @LastEditors: ilovejwl
 */
import { AxiosRequestConfig, AxiosResponse } from '../types/index';

export class AxiosError extends Error {
  isAxiosError: boolean;
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;

  /* istanbul ignore next */
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;

    /**
     * NOTE `处理TypeScript继承一些内置对象时的坑`
     */
    Object.setPrototypeOf(this, AxiosError.prototype);
  }
}

/**
 * @description	创建一个错误对象
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {string} message
 * @param {AxiosRequestConfig} config
 * @param {(string | null)} [code]
 * @param {*} [request]
 * @param {AxiosResponse} [response]
 * @returns {AxiosError}
 */
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, request, response);

  return error;
}
