/**
 * let 解决的var中的所有的弊端带来的问题，简化了代码的书写量，代码的可读性也相对好些了
 * 使用let，作用域分为：`全局作用域`、`函数作用域`、`块级作用域`
 */

// #region 块级作用域 Code Module
{
	function f(value: boolean) {
		let a = 1000;

		/* 变量b 指挥在 if {} 起作用，不存在变量提升的奇怪现象 */
		if (value) {
			let b = a + 1;
			return b;
		}

		/* 无法在外面访问 if {} 中的b */
		// return b;
	}
}

// #endregion 块级作用域 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 块级作用域在try-catch中的使用 Code Module

{
	try {
		throw 'this is error';
	} catch (error) {
		console.log('error start');
		console.log(error);
		console.log('error end');
	}

	/* 外面无法访问try catch中的error */
	// console.log(error);
}

// #endregion 块级作用域在try-catch中的使用 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region let 声明的变量，不存在变量提升 Code Module

{
	// a++; // 会报错
	let a = 1;
	a++; // 正常
	console.log(a);
}

// #endregion let 声明的变量，不存在变量提升 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 函数中使用外部的变量 Code Module
{
	/* 编译不会报错
        编译成es2015(es6) 时执行就会报错
        编译成默认的es5 时 执行不会报错
    */
	function foo1() {
		return a;
	}

	foo1();
	let a = 10;
}

// #endregion 函数中使用外部的变量 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region let 关键字定义的变量 `同一级作用域下` 不能够被重定义 Code Module

{
	/* 重新定义会报错 */
	// let a = 5;
	let a = 20;
}

// #endregion let 关键字定义的变量 `同一级作用域下` 不能够被重定义 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 不存在变量提升，有独立的块级作用域 Code Module
{
	function sumMatrix(matrix: number[][]) {
		let sum = 0;

		for (let index = 0; index < matrix.length; index++) {
			const elements = matrix[index];
			/* 变量index互相独立，无不干扰，但是可读性不是太好噢 */
			for (let index = 0; index < elements.length; index++) {
				sum += elements[index];
			}
		}
		return sum;
	}

	var matrix = [[1, 2, 3], [4, 5, 6]];

	console.log(sumMatrix(matrix)); // 21
}
// #endregion 不存在变量提升，有独立的块级作用域 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 异步单线程 Code Module

{
	for (let index = 0; index < 10; index++) {
		/* 块级作用域下使用异步代码，异步代码中使用的变量实际上会在一个独立的区域中存在，异步代码也会在整个独立的区域中运行 */
		setTimeout(function() {
			console.log(index); // 1、2、3、4、5、6、7、8、9
		}, 100 * index);
	}
}

// #endregion 异步单线程 Code Module End

// -----------------------------------------分隔符--------------------------------------------
