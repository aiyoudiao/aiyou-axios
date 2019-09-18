/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-07 14:50:34
 * @LastEditTime: 2019-08-12 15:35:27
 * @LastEditors: ilovejwl
 */
/**
 * typescript 的好处：
 *  编译阶段可以察觉出代码的问题，运行还是运行js
 */
/**
 * 交叉类型适合典型的混入或者不适合面向对象模型的地方使用，在JavaScript中使用的比较多
 * 一个变量拥有两种类型的方法的属性
 */
// #region 交叉类型 Code Module
{
  function extend (first, secord) {
    var result = {};
    for (var id in first) {
      result[id] = first[id];
    }
    for (var id in secord) {
      if (!result.hasOwnProperty (id)) {
        result[id] = secord[id];
      }
    }
    return result;
  }
  var Person /** @class */ = (function () {
    function Person (name) {
      this.name = name;
    }
    return Person;
  }) ();
  var ConsoleLogger /** @class */ = (function () {
    function ConsoleLogger () {}
    ConsoleLogger.prototype.log = function () {
      // ...
    };
    return ConsoleLogger;
  }) ();
  /* jim 拥有两个类型的属性和方法，所以这个jim就是交叉类型 */
  var jim = extend (new Person ('jim'), new ConsoleLogger ());
  console.log (jim.name);
  console.log (jim.log ());
}
// #endregion 交叉类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
