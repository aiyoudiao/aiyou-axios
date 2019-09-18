/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-01 15:27:53
 * @LastEditTime: 2019-08-01 15:27:53
 * @LastEditors: ilovejwl
 */
// #region 展开运算符 数组展开 Code Module

{
  let first = [1, 2];
  let last = [4, 5];

  /* 数组展开，按照顺序展开 */
  let arr = [0, ...first, ...last];

  console.log(first); // [ 1, 2 ]
  console.log(last); // [ 4, 5 ]
  console.log(arr); // [ 0, 1, 2, 4, 5 ]
}

// #endregion 展开运算符 数组展开 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 展开运算符 对象展开 Code Module

{
  let default_ts = {
    name: 'zs',
    age: 25,
    sex: 'man'
  };
  /* 对象展开比数组展开要复杂一点， 后面的key:value 会覆盖前面的 ，所以需要注意顺序*/
  let result = { ...default_ts, height: 185, age: 18 };

  console.log(result); // { name: 'zs', age: 18, sex: 'man', height: 185 }
}

// #endregion 展开运算符 对象展开 Code Module End

// -----------------------------------------分隔符--------------------------------------------
