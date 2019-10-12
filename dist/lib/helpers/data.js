"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion: 进行数据相关操作的 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 10:21:20
 * @LastEditTime: 2019-09-18 12:41:55
 * @LastEditors: ilovejwl
 */
var util_1 = require("./util");
/**
 * @description	对请求的数据进行转换
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} data
 * @returns {*}
 */
function transformRequest(data) {
    if (util_1.isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}
exports.transformRequest = transformRequest;
/**
 * @description	对响应的数据进行转换
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} data
 * @returns {*}
 */
function transformResponse(data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        }
        catch (error) {
            console.error(error);
        }
    }
    return data;
}
exports.transformResponse = transformResponse;
//# sourceMappingURL=data.js.map