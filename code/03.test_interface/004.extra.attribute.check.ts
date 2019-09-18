/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-01 20:21:38
 * @LastEditTime: 2019-08-01 20:21:38
 * @LastEditors: ilovejwl
 */
/**
 * 绕过额外的类型检查实际上是没有太大的意义，
 * 如果有需要，直接在接口中新增相关的属性
 */

// #region 额外属性检查 Code Module

{
  /* 正方形 */
  interface Square {
    color: string;
    area: number;
  }

  /* 正方形的配置 */
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  /* 根据正方形的配置返回一个正方形 */
  function createSquare1(config: SquareConfig): Square {
    let new_square = { color: '#ffffff', area: 8000 };

    if (config.color) {
      new_square.color = config.color;
    }

    if (config.width) {
      new_square.area = Math.pow(config.width, 2);
    }

    return new_square;
  }

  /* 创建一个正方形 */
  let my_square = createSquare1({
    colorr: '#000000',
    width: 100
    /* 通过类型转换的方法可以解除 colorr 这样的非接口中的属性的检查操作 */
  } as SquareConfig);
}

// #endregion 额外属性检查 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 通过定义签名索引的方式 来清除额外属性的检查 Code Module
{
  /* 正方形 */
  interface Square {
    color: string;
    area: number;
  }

  /* 正方形的配置 */
  interface SquareConfig {
    color?: string;
    width?: number;

    /* 签名索引，可以指定除了已定义过的任意的一个属性 */
    [propName: string]: any;
  }

  /* 根据正方形的配置返回一个正方形 */
  function createSquare2(config: SquareConfig): Square {
    let new_square = { color: '#ffffff', area: 8000 };

    if (config.color) {
      new_square.color = config.color;
    }

    if (config.width) {
      new_square.area = Math.pow(config.width, 2);
    }

    return new_square;
  }

  /* 创建一个正方形 */
  let my_square = createSquare2({
    colorr: '#000000',
    width: 100
  });
}
// #endregion 通过定义签名索引的方式 来清除额外属性的检查 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 通过传入一个变量的方式 来清除额外属性的检查 Code Module
{
  /* 正方形 */
  interface Square {
    color: string;
    area: number;
  }

  /* 正方形的配置 */
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  /* 根据正方形的配置返回一个正方形 */
  function createSquare3(config: SquareConfig): Square {
    let new_square = { color: '#ffffff', area: 8000 };

    if (config.color) {
      new_square.color = config.color;
    }

    if (config.width) {
      new_square.area = Math.pow(config.width, 2);
    }

    return new_square;
  }

  /* 声明一个对象的变量 */
  let square_option = {
    colorr: '#000000',
    width: 100
  };

  /* 创建一个正方形 */
  /* 通过传入一个变量的方式，也可以清除额外属性的检查操作 */
  let my_square = createSquare3(square_option);
}
// #endregion 通过传入一个变量的方式 来清除额外属性的检查 Code Module End

// -----------------------------------------分隔符--------------------------------------------
