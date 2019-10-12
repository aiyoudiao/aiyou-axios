"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion: 相关辅助函数的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 08:43:31
 * @LastEditTime: 2019-09-18 10:24:13
 * @LastEditors: ilovejwl
 */
var toString = Object.prototype.toString;
/**
 * @description	是否为日期类型
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} val
 * @returns {val is Date}
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
/**
 * @description	是否为对象类型
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} val
 * @returns {val is Object}
 */
function isObject(val) {
    /**
     * 1. 这种判断方式对于 FormData、ArrayBuffer 这些类型的判断也为 true
     */
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isPlainObject(val) {
    /**
     * 1. 这种判断方式对于 FormData、ArrayBuffer 这些类型的判断为 false
     */
    return toString.call(val) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
//# sourceMappingURL=util.js.map