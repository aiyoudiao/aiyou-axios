/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-10-08 15:27:55
 * @LastEditTime: 2019-10-10 16:48:35
 * @LastEditors: ilovejwl
 */
import { createError } from 'src/helpers/error';
import { AxiosRequestConfig, AxiosResponse } from 'src/types';

describe('helpers::error', function() {
  test('should create an Error with message, config, code, request, response and isAxiosError', () => {
    const request = new XMLHttpRequest();
    const config: AxiosRequestConfig = { method: 'post' };
    const response: AxiosResponse = {
      status: 200,
      statusText: 'OK',
      headers: null,
      request,
      config,
      data: { foo: 'bar' }
    };
    const error = createError('Boom!', config, 'SOMETHING', request, response);
    expect(error instanceof Error).toBeTruthy();
    expect(error.message).toBe('Boom!');
    expect(error.config).toBe(config);
    expect(error.code).toBe('SOMETHING');
    expect(error.request).toBe(request);
    expect(error.response).toBe(response);
    expect(error.isAxiosError).toBeTruthy();
  });
});
