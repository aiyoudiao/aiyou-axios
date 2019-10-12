/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-10-07 14:48:21
 * @LastEditTime: 2019-10-10 16:48:49
 * @LastEditors: ilovejwl
 */
import cookie from 'src/helpers/cookie';

describe('helpers:cookie', () => {
  test('should read cookies', () => {
    document.cookie = 'foo=baz';
    expect(cookie.read('foo')).toBe('baz');
  });

  test('should return null if cookie name is not exist', () => {
    document.cookie = 'foo=baz';
    expect(cookie.read('bar')).toBeNull();
  });
});
