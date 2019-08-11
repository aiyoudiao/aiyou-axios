/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-03 11:46:04
 * @LastEditTime: 2019-08-03 11:46:04
 * @LastEditors: your name
 */
/**
 * typescript 的类型推断能力比较友好
 */

// #region 函数类型 Code Module

{
	/* 函数参数类型 以及 返回值类型 */
	function add1(x: number, y: number): number {
		return x + y;
	}

	/* 完整的函数类型
	 * (baseValue: number, increment: number) => number
	 * 表示入参有两个 都是数字类型，返回值也是数字类型
	 * */
	let myAdd: (baseValue: number, increment: number) => number = function(
		x: number,
		y: number,
	): number {
		return x + y;
	};

	/* 省略 函数类型的写法
	/* 就算你不写函数类型，
	 * 它也可以根据匿名函数的参数类型和返回值类型来，自动去推断函数的类型是什么
	 * */
	let myAdd2 = function(x: number, y: number): number {
		return x + y;
	};

	/* 省略 匿名函数的参数类型和返回值类型的写法
	/* 就算你不写匿名函数的参数类型和返回值类型，
	 * 它也可以根据你声明的函数类型来对匿名函数进行参数类型和函数返回值类型的推断
	 * */
	let myAdd3: (baseValue: number, increment: number) => number = function(
		x,
		y,
	) {
		return x + y;
	};
}

// #endregion 函数类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------
