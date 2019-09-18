/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-02 17:51:26
 * @LastEditTime: 2019-09-12 21:34:12
 * @LastEditors: ilovejwl
 */
// #region 混合类型 Code Module

{
  interface Counter {
    /* 定义函数签名 */
    (start: number): string;

    interval: number;

    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function(start: number) {} as Counter;

    counter.interval = 123;
    counter.reset = function() {};

    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 999.0;
}

// #endregion 混合类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------
