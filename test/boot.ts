/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-10-07 14:31:39
 * @LastEditTime: 2019-10-08 21:32:00
 * @LastEditors: ilovejwl
 */
// /*
//  * @Descripttion: ilovejwl
//  * @version: 1.0.0
//  * @Author: ilovejwl
//  * @Date: 2019-10-07 14:31:39
//  * @LastEditTime: 2019-10-07 14:31:39
//  * @LastEditors: ilovejwl
//  */
// const JasmineCore = require('jasmine-core');
// // @ts-ignore
// global.getJasmineRequireObj = function() {
//   return JasmineCore;
// };
// require('jasmine-ajax');

console.log('boot.ts 执行成功。');
const JasmineCore = require('jasmine-core');
// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore;
};

require('jasmine-ajax');
