/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-08 18:08:42
 * @LastEditTime: 2019-08-12 15:31:44
 * @LastEditors: ilovejwl
 */
// #region 在非严格模式下 null类型和undefined类型是所有类型的子类型 Code Module
{
  var j = 'jwl';
  // j = null;
  var z = 'zph';
  z = null;
  // z = undefined;
}
// #endregion 在非严格模式下 null类型和undefined类型是所有类型的子类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 可选参数实际上是一种联合类型 Code Module
{
  /* y? 这个可选参数，实际上是一种联合类型，是undefined|number这种联合类型 */
  function f (x, y) {
    return x + (y || 0);
  }
  f (1, 2);
  f (1);
  f (1, undefined);
  /* null不能够赋值给undefined|number这种联合类型 */
  // f(1, null);
}
// #endregion 可选参数实际上是一种联合类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 严格模式下 类型是确定的，数字类型的不能够赋值为undefined或者null Code Module
{
  var C /** @class */ = (function () {
    function C () {}
    return C;
  }) ();
  var c = new C ();
  c.a = 123;
  /* 严格编译模式下 number类型不能够赋值为undefined */
  // c.a = undefined;
  c.b = 13;
  c.b = undefined;
  /* 可选类型不能够赋值为null */
  // c.b = null;
}
// #endregion 严格模式下 类型是确定的，数字类型的不能够赋值为undefined或者null Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 使用类型保护的方式来实现可为null的类型 Code Module
{
  function f2 (sn) {
    if (sn === null) {
      return 'default';
    } else {
      return sn;
    }
  }
  /* 简写f2 */
  function f3 (sn) {
    return sn || 'default';
  }
}
// #endregion 使用类型保护的方式来实现可为null的类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 可为null的类型 Code Module
{
  function broken (name) {
    function postfix (epither) {
      /* 编辑器觉得这个name可能为null，所以会报错，
      在严格编译模式下，编译器无法去对嵌套函数进行识别
      */
      // return name.charAt(0) + '. ther' + epither;
      /* 使用类型断言 */
      return name.charAt (0) + '. ther' + epither;
    }
    name = name || 'BOb';
    return postfix (name);
  }
}
// #endregion 可为null的类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
