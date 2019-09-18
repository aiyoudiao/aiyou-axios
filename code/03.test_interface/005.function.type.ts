/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-01 22:01:34
 * @LastEditTime: 2019-08-01 22:01:34
 * @LastEditors: ilovejwl
 */
// #region 定义函数类型 Code Module
{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  /* 定义明确的类型 ，也可以简写，使用typescript的自动类型推断*/
  mySearch = function(sourceVar: string, subStringVar: string): boolean {
    let result = sourceVar.search(subStringVar);

    return result > 1;
  };
}

// #endregion 定义函数类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 使用typescript的类型推断 Code Module
{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  /* 使用typescript的自动类型推断 */
  mySearch = function(sourceVar, subStringVar) {
    let result = sourceVar.search(subStringVar);

    return result > 1;
  };
}
// #endregion 使用typescript的类型推断 Code Module End
