/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-03 11:40:17
 * @LastEditTime: 2019-08-03 11:40:17
 * @LastEditors: ilovejwl
 */
// #region 函数基础 Code Module
{
  /* 普通的函数声明 */
  function add(x, y) {
    return x + y;
  }

  /* 匿名函数赋值给一个变量 */
  let myAdd = function(x, y) {
    return x + y;
  };

  /* 将要给有名字的函数赋值给一个变量，也是可以的 */
  let myAdd2 = function add2(x, y) {
    return x + y;
  };

  /* 在函数内部使用函数外部的变量 */
  let z = 25;
  function addToZ(x, y) {
    return x + y + z;
  }
}

// #endregion 函数基础 Code Module End

// -----------------------------------------分隔符--------------------------------------------

/**
 * SECTION 这是一个分层的锚点区域
 * ANCHOR - 用于指示文件中的某个部分
 * TODO - 正在等待完成的项
 * FIXME - 需要修复错误的项
 * STUB - 用于生成的默认代码段
 * NOTE - 特定代码部分的重要说明
 * REVIEW - 需要额外审核的项
 * !SECTION 这是分层的锚点块儿结束的区域
 */
