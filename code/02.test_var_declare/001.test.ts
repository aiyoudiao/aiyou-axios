/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-07-31 21:17:15
 * @LastEditTime: 2019-07-31 21:17:15
 * @LastEditors: ilovejwl
 */
/**
 * var 的弊端 比较多，如下都是var的造成的代码`可读性不好`的情况
 * var 会造成作用域不明确，使用var 就只分`全局作用域变量`和`函数作用域变量`
 * var 支持  同一级作用域下  重复定义变量，出现了变量的提升的怪现象后，实际上也`只算定义了一次`。
 */

// #region 闭包例子 Code Module

{
  function f() {
    let a = 10;
    return function g() {
      let b = a + 1;
      return b;
    };
  }

  console.log(f()()); // 11
}

// #endregion 闭包例子 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 变量提升 Code Module

{
  function t(value) {
    if (value) {
      /* 这里的if { } 中的变量的 `声明` 会被 `提升` 到据离变量最近的函数内部 */
      let x = 10;
    }
    return x;
  }

  console.log(t(true)); // 10
  console.log(t(false)); // undefined
}

{
  function sumMatrix(matrix) {
    let sum = 0;
    // 外界传入的matrix，它的长度为2
    for (let index = 0; index < matrix.length; index++) {
      let elements = matrix[index];
      /* 变量index 被干扰了 index 变成了 3 */
      for (let index = 0; index < elements.length; index++) {
        sum += elements[index];
      }
      // 两个var index，支持重复定义，变量提升后，就只有一个var index，其它的就只是赋值 inde =0
    }

    return sum;
  }

  let matrix = [[1, 2, 3], [4, 5, 6]];

  console.log(sumMatrix(matrix)); // 6
}

// #endregion 变量提升 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 异步单线程 Code Module

{
  for (let i = 0; i < 10; i++) {
    /* 异步代码 会等同步代码执行完毕，i变成10之后，同步代码才会执行完毕 */
    setTimeout(
      function() {
        console.log(i); // 10
      },
      // 0 * 100、1 * 100 ...
      100 * i
    );
  }

  for (let i = 0; i < 10; i++) {
    /* 使用闭包，对每一个异步代码进行作用域的划分，每一个异步代码执行的作用域都会是`独立`的 */
    (function(i) {
      setTimeout(function() {
        console.log(i); // 0、1、2、3、4、5、6、7、8、9
      }, 100 * i);
    })(i);
  }
}

// #endregion 异步单线程 Code Module End

// -----------------------------------------分隔符--------------------------------------------
