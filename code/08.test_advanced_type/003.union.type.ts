/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-07 16:27:35
 * @LastEditTime: 2019-09-17 21:16:40
 * @LastEditors: ilovejwl
 */
/**
 * 联合类型表示这个值可以是几个类型值之一
 */

// #region 联合类型：增强编译时的代码检查 Code Module

{
  /**
   *	填充多少个空格
   *
   * @param {string} value
   * @param {(string | number)} padding
   * @returns
   */
  // function padLeft(value: string, padding: any) {
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
      return Array(padding + 1).join(' ') + value;
    }

    if (typeof padding === 'string') {
      return padding + value;
    }

    throw new Error(`The type of ${padding} can only be one of a string and a number`);
  }

  console.log(padLeft('ilovejwl', 20));
  console.log(padLeft('ilovejwl', 'zph'));
  /* 将any类型设置为 具体的联合类型之后，下面的代码就无法通过正常编译了 */
  // console.log(padLeft('ilovejwl', true));
}

// #endregion 联合类型：增强编译时的代码检查 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 联合类型：只能够使用两个类型中相同的属性或者方法 Code Module

{
  interface Bird {
    fly();
    layEggs();
  }

  interface Fish {
    swim();
    layEggs();
  }

  function getSamllPet(): Fish | Bird {
    return null;
  }

  let pet = getSamllPet();
  /* 只能够调用两个类型中的共同成员 */
  pet.layEggs();
  /* 不能调用两个类型不相同的成员 */
  // pet.swim()
}

// #endregion 联合类型：只能够使用两个类型中相同的属性或者方法 Code Module End

// -----------------------------------------分隔符--------------------------------------------
