/*
 * @Descripttion: 请输入文件描述信息
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-08 16:44:04
 * @LastEditTime: 2019-08-12 21:02:04
 * @LastEditors: ilovejwl
 */
// #region 在非严格模式下 null类型和undefined类型是所有类型的子类型 Code Module

{
  let j = 'jwl';

  // j = null;

  let z: string | null = 'zph';
  z = null;

  // z = undefined;
}

// #endregion 在非严格模式下 null类型和undefined类型是所有类型的子类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 可选参数实际上是一种联合类型 Code Module

{
  /* y? 这个可选参数，实际上是一种联合类型，是undefined|number这种联合类型 */
  function f(x: number, y?: number) {
    return x + (y || 0);
  }

  f(1, 2);
  f(1);
  f(1, undefined);
  /* null不能够赋值给undefined|number这种联合类型 */
  // f(1, null);
}

// #endregion 可选参数实际上是一种联合类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 严格模式下 类型是确定的，数字类型的不能够赋值为undefined或者null Code Module

{
  class C {
    a: number;
    b?: number;
  }

  let c = new C();
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

// #region 使用自定义的类型保护来实现可为null的类型 Code Module

{
  function f2(sn: string | null): string {
    if (sn === null) {
      return 'default';
    } else {
      return sn;
    }
  }

  /* 简写f2 */
  function f3(sn: string | null): string {
    return sn || 'default';
  }
}

// #endregion 使用自定义的类型保护来实现可为null的类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region null的类型保护 Code Module

{
  function broken(name: string | null): string {
    function postfix(epither: string) {
      /*
      在严格编译模式下，编译器无法去对嵌套函数进行识别
      编辑器觉得这个name可能为null，所以会报错
      */
      // return name.charAt(0) + '. ther' + epither;

      /* NOTE: 使用类型断言，通过变量名!的方式，主动的告诉编辑器，这个变量不为null */
      return name!.charAt(0) + '. ther' + epither;
    }

    name = name || 'BOb';

    return postfix(name);
  }

  broken(null);
}

// #endregion null的类型保护 Code Module End

// -----------------------------------------分隔符--------------------------------------------
