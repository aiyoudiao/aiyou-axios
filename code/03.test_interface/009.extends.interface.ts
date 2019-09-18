/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-02 17:11:22
 * @LastEditTime: 2019-08-02 17:11:22
 * @LastEditors: ilovejwl
 */
/**
 * 接口可以继承多个接口
 */

// #region 继承接口 Code Module

/**
 * 形状接口
 *
 * @interface Shape
 */
interface Shape {
  color: string;
}

/**
 * 绘笔接口
 *
 * @interface PenStroke
 */
interface PenStroke {
  penWidth: number;
}

/**
 *	方块接口
 *
 * @interface Square
 * @extends {Shape} 继承形状接口
 * @extends {PenStroke} 继承绘笔接口
 */
interface Square extends Shape, PenStroke {
  sideLength: number;
}

/* 类型断言(类型转换) */
let square = {} as Square;

square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;

// #endregion 继承接口 Code Module End

// -----------------------------------------分隔符--------------------------------------------
