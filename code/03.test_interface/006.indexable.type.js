"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// #region 定义可索引的类型 Code Module
{
    var my_string_arr = void 0;
    my_string_arr = ['test', 'string', 'array'];
    /* 通过索引来取值 */
    var my_string = my_string_arr[0];
}
// #endregion 定义可索引的类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 索引签名的类型，数字签名的返回值必须是字符串签名的子类型 Code Module
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
}
// #endregion 索引签名的类型，数字签名的返回值必须是字符串签名的子类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
