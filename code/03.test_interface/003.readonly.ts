/**
 * 只读属性虽然不允许重新赋值，但是可以进行类型转换的方式来进行赋值等操作
 * 只读属性只是在编译时对它进行控制
 * 如果将一个可读可写的属性赋值给只读属性，那么可以通过修改可读可写属性来间接修改只读属性，同时编译器也不会报错。
 */

// #region 只读属性 Code Module

{
	interface Point {
		readonly x: number;
		readonly y: number;
	}

	let p1: Point = { x: 200, y: 200 };

	/* 只读属性不允许重新赋值 */
	// p1.x = 5;
}
// #endregion 只读属性 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 只读的数组 Code Module
{
	let a: number[] = [1, 2, 3, 4];
	let ro: ReadonlyArray<number> = a;

	a[1] = 3;
	a.push(10);

	/* 编译时会报错 */
	// ro[1] = 5;
	// ro.push(11);

	/* 类型转换之后，就可以push了 */
	(ro as number[]).push(11);
}

// #endregion 只读的数组 Code Module End

// -----------------------------------------分隔符--------------------------------------------
