"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xhr_1 = require("./xhr");
var url_1 = require("./helpers/url");
var data_1 = require("./helpers/data");
var header_1 = require("./helpers/header");
/**
 * @description	axios 入口
 * @author ilovejwl
 * @date 2019-09-17
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
function axios(config) {
    processConfig(config);
    return xhr_1.default(config).then(function (res) {
        return transformResponseData(res);
    });
}
/**
 * @description	处置 config
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 */
function processConfig(config) {
    config.url = transformUrl(config);
    config.headers = transfromHeaders(config);
    config.data = transformRequestData(config);
}
/**
 * @description	转换 config中的url
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {string}
 */
function transformUrl(config) {
    var url = config.url, params = config.params;
    return url_1.buildURL(url, params);
}
/**
 * @description	转换请求时 config 中的data
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {*}
 */
function transformRequestData(config) {
    return data_1.transformRequest(config.data);
}
/**
 * @description	转换 config 中的headers
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosRequestConfig} config
 * @returns {*}
 */
function transfromHeaders(config) {
    var _a = config.headers, headers = _a === void 0 ? {} : _a, data = config.data;
    return header_1.processHeaders(headers, data);
}
/**
 * @description	转换响应时 的data
 * @author ilovejwl
 * @date 2019-09-18
 * @param {AxiosResponse} res
 * @returns {AxiosResponse}
 */
function transformResponseData(res) {
    res.data = data_1.transformResponse(res.data);
    return res;
}
exports.default = axios;
//# sourceMappingURL=index.js.map