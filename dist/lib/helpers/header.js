"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion: 处理headers的辅助函数 文件
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-18 10:41:55
 * @LastEditTime: 2019-09-18 14:16:05
 * @LastEditors: ilovejwl
 */
var util_1 = require("./util");
/**
 * @description	规范headers中的键值对命名
 * @author ilovejwl
 * @date 2019-09-18
 * @param {*} headers
 * @param {string} normalizedName
 * @returns {void}
 */
function normalizeHeaderName(headers, normalizedName) {
    if (!headers) {
        return;
    }
    Object.keys(headers).forEach(function (name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name];
            delete headers[name];
        }
    });
}
/**
 * @description	处理headers
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {*} headers
 * @param {*} data
 * @returns {*}
 */
function processHeaders(headers, data) {
    normalizeHeaderName(headers, 'Content-Type');
    if (util_1.isPlainObject(data)) {
        if (headers && !headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}
exports.processHeaders = processHeaders;
/**
 * @description	解析 headers
 * @author ilovejwl
 * @date 2019-09-18
 * @export
 * @param {string} headers
 * @returns {*}
 */
function parseHeaders(headers) {
    var parsed = Object.create(null);
    if (!headers) {
        return parsed;
    }
    headers.split('\r\n').forEach(function (line) {
        var _a = line.split(':'), key = _a[0], val = _a[1];
        key = key.trim().toLowerCase();
        if (!key) {
            return;
        }
        if (val) {
            val = val.trim();
        }
        parsed[key] = val;
    });
    return parsed;
}
exports.parseHeaders = parseHeaders;
//# sourceMappingURL=header.js.map