/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-10-08 16:14:43
 * @LastEditTime: 2019-10-08 16:14:43
 * @LastEditors: ilovejwl
 */
export function getAjaxRequest(): Promise<JasmineAjaxRequest> {
  return new Promise(function(resolve) {
    setTimeout(() => {
      return resolve(jasmine.Ajax.requests.mostRecent());
    }, 0);
  });
}
