// #region 函数基础 Code Module
{
  /* 普通的函数声明 */
  function add (x, y) {
    return x + y;
  }
  /* 匿名函数赋值给一个变量 */
  var myAdd = function (x, y) {
    return x + y;
  };
  /* 将要给有名字的函数赋值给一个变量，也是可以的 */
  var myAdd2 = function add2 (x, y) {
    return x + y;
  };
  /* 在函数内部使用函数外部的变量 */
  var z_1 = 25;
  function addToZ (x, y) {
    return x + y + z_1;
  }
}

// #endregion 函数基础 Code Module End
// -----------------------------------------分隔符--------------------------------------------
