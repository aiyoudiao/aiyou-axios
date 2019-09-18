/*
 * @Descripttion: 请输入文件描述信息
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-08 18:46:43
 * @LastEditTime: 2019-08-12 21:04:32
 * @LastEditors: ilovejwl
 */
/**
 * 字符串字面量类型也可以触发类型推断
 */

// #region 字符串字面量类型 Code Module

{
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

  class UIElement {
    /**
     *	动画
     *
     * @param {number} dx
     * @param {number} dy
     * @param {Easing} easing
     * @memberof UIElement
     */
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === 'ease-in') {
      } else if (easing === 'ease-out') {
      } else if (easing === 'ease-in-out') {
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, 'ease-in');

  /* 第三个参数不符合定义的字符串字面量类型，所以会直接报错 */
  // button.animate(0, 0, 'uneasy');

  /* 在非严格编译模式下，第三个参数可以传null，因为在typescript中undefined和null是所有类型的子类 */
  // button.animate(0, 0, null);
}

// #endregion 字符串字面量类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------
