/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 18:59:56
 * @LastEditTime: 2019-08-09 10:45:04
 * @LastEditors: Please set LastEditors
 */
/**
 * 字符串字面量类型也可以触发类型推断
 */
// #region 字符串字面量类型 Code Module
{
  var UIElement /** @class */ = (function () {
    function UIElement () {}
    /**
         *	动画
         *
         * @param {number} dx
         * @param {number} dy
         * @param {Easing} easing
         * @memberof UIElement
         */
    UIElement.prototype.animate = function (dx, dy, easing) {
      if (easing === 'ease-in') {
      } else if (easing === 'ease-out') {
      } else if (easing === 'ease-in-out') {
      }
    };
    return UIElement;
  }) ();
  var button = new UIElement ();
  button.animate (0, 0, 'ease-in');
  /* 第三个参数不符合定义的字符串字面量类型，所以会直接报错 */
  // button.animate(0, 0, 'uneasy');
}
// #endregion 字符串字面量类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
