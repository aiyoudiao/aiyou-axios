/**
 * 接口继承类，会继承这个类的成员，但是不包括实现
 * 接口继承了类的私有成员和受保护的成员时，只能被这个类或者其子类实现
 *
 * 接口继承类，使用场景并不是很多，但是当你开发一个庞大的结构的时候就会用到了。
 **/
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
// #region 接口继承类 Code Module
{
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Button.prototype.select = function () { };
        return Button;
    }(Control));
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBox.prototype.select = function () { };
        return TextBox;
    }(Control));
    /* 这样不行，因为ImageC没有继承Control，
     * 所以实现这个接口的时候会报错，因为这个接口继承了Contrl 类的私有成员state
     **/
    // class ImageC implements SelectableControl {
    // 	select() {}
    // }
}
// #endregion 接口继承类 Code Module End
// -----------------------------------------分隔符--------------------------------------------
