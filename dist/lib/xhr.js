"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var header_1 = require("./helpers/header");
/**
 * @description	XMLHttpRequest对象
 * @author ilovejwl
 * @date 2019-09-17
 * @export
 * @param {AxiosRequestConfig} config
 * @returns {AxiosPromise}
 */
function xhr(config) {
    return new Promise(function (resolve, reject) {
        var _a = config.data, data = _a === void 0 ? null : _a, url = config.url, _b = config.method, method = _b === void 0 ? 'get' : _b, headers = config.headers, responseType = config.responseType;
        var request = new XMLHttpRequest();
        if (responseType) {
            request.responseType = responseType;
        }
        request.open(method.toLowerCase(), url, true);
        request.onreadystatechange = function handleLoad() {
            if (request.readyState !== 4) {
                return;
            }
            var responseHeaders = header_1.parseHeaders(request.getAllResponseHeaders());
            var responseData = responseType && responseType !== 'text' ? request.response : request.responseText;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            resolve(response);
        };
        Object.keys(headers).forEach(function (name) {
            if (data === null && name.toUpperCase() === 'content-type') {
                delete headers[name];
            }
            else {
                request.setRequestHeader(name, headers[name]);
            }
        });
        request.send(data);
    });
}
exports.default = xhr;
//# sourceMappingURL=xhr.js.map