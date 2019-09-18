/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-02 18:39:25
 * @LastEditTime: 2019-08-02 18:39:25
 * @LastEditors: ilovejwl
 */
// #region 类基础 Code Module

{
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return 'Hello，' + this.greeting;
    }
  }

  let greeter = new Greeter('world');
  greeter.greet();
}

// #endregion 类基础 Code Module End

// -----------------------------------------分隔符--------------------------------------------
