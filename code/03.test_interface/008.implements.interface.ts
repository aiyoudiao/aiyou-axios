/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-02 16:26:55
 * @LastEditTime: 2019-08-02 16:26:55
 * @LastEditors: ilovejwl
 */
/**
 * 定义类的接口时，会有两种
 * 一种是类的实例接口（类的实例部分），一种是类的构造器接口（类的静态部分）
 * 针对你的需要来使用不同的`类的接口`
 */

// #region 继承接口 Code Module

{
  /**
   * 时钟接口(实例部分的接口)
   *
   * @interface ClockInterface
   */
  interface ClockInterface {
    tick();
  }

  /**
   * 时钟构造器接口（静态部分的接口）
   *
   * @interface ClockConstructor
   */
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }

  /**
   * 创建一个时钟
   *
   * @param {ClockConstructor} ctor 构造函数
   * @param {number} hour 小时
   * @param {number} minute 分钟
   * @returns {ClockInterface} 返回一个实现了始终接口的实例
   */
  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  /**
   * 数字时钟
   *
   * @class DigitalClock
   * @implements {ClockInterface} 返回一个实现时钟接口的实例
   */
  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}

    tick() {
      console.info('beep beep beep');
    }
  }

  /**
   * 模拟时钟
   *
   * @class AnalogClock
   * @implements {ClockInterface}  返回一个实现时钟接口的实例
   */
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}

    tick() {
      console.log('tick toc');
    }
  }

  let digital = createClock(DigitalClock, 16, 49);
  let analog = createClock(AnalogClock, 7, 10);
}

// #endregion 继承接口 Code Module End

// -----------------------------------------分隔符--------------------------------------------
