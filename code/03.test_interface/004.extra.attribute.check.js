/**
 * 绕过额外的类型检查实际上是没有太大的意义
 */
// #region 额外属性检查 Code Module
{
  /* 根据正方形的配置返回一个正方形 */
  function createSquare1 (config) {
    var new_square = {color: '#ffffff', area: 8000};
    if (config.color) {
      new_square.color = config.color;
    }
    if (config.width) {
      new_square.area = Math.pow (config.width, 2);
    }
    return new_square;
  }
  /* 创建一个正方形 */
  var my_square = createSquare1 ({
    colorr: '#000000',
    width: 100,
  });
}
// #endregion 额外属性检查 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 通过定义签名索引的方式 来清除额外属性的检查 Code Module
{
  /* 根据正方形的配置返回一个正方形 */
  function createSquare2 (config) {
    var new_square = {color: '#ffffff', area: 8000};
    if (config.color) {
      new_square.color = config.color;
    }
    if (config.width) {
      new_square.area = Math.pow (config.width, 2);
    }
    return new_square;
  }
  /* 创建一个正方形 */
  var my_square = createSquare2 ({
    colorr: '#000000',
    width: 100,
  });
}
// #endregion 通过定义签名索引的方式 来清除额外属性的检查 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 通过传入一个变量的方式 来清除额外属性的检查 Code Module
{
  /* 根据正方形的配置返回一个正方形 */
  function createSquare3 (config) {
    var new_square = {color: '#ffffff', area: 8000};
    if (config.color) {
      new_square.color = config.color;
    }
    if (config.width) {
      new_square.area = Math.pow (config.width, 2);
    }
    return new_square;
  }
  /* 声明一个对象的变量 */
  var square_option = {
    colorr: '#000000',
    width: 100,
  };
  /* 创建一个正方形 */
  /* 通过传入一个变量的方式，也可以清除额外属性的检查操作 */
  var my_square = createSquare3 (square_option);
}
// #endregion 通过传入一个变量的方式 来清除额外属性的检查 Code Module End
// -----------------------------------------分隔符--------------------------------------------
