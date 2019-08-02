// #region 数组解构 Code Module
{
	/* 定义一个数组 */
	let data = [1, 2];

	/* 按照顺序解构 */
	let [first, last] = data;
	/* 类似如下的逐个赋值的操作 */
	// let first = data[0];
	// let last = data[1];
}
// #endregion 数组解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 函数参数解构 Code Module
{
	/* 定义一个存放两个数值的数组 */
	let data: [number, number] = [1, 2];

	/* 定义一个函数 */
	function f([first, last]: [number, number]) {
		// function f([first, last]: [number, number] = [4, 5]) { // 支持赋默认值的操作
		console.log(first);
		console.log(last);
	}

	f(data);
}
// #endregion 函数参数解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 数组的反向解构 Code Module
{
	/* 定义一个数组 存放五个数值 */
	let data: [number, number, number, number, number] = [1, 2, 3, 4, 5];

	/* 通过扩展运算符来实现反向解构 */
	let [first, ...test_arr] = data;

	console.log(first); // 1
	console.log(test_arr); // [ 2, 3, 4, 5 ]
}
// #endregion 数组的反向解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 数组的稀疏解构 Code Module

{
	/* 定义一个数组 存放五个数值 */
	let data: [number, number, number, number, number] = [1, 2, 3, 4, 5];

	/* 通过 空位置 `,` 的方式来跳过按照顺序的解构赋值 */
	let [, , three] = data;
	console.log(three); // 3
}

// #endregion 数组的稀疏解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 对象解构 Code Module

{
	let obj = {
		a: 'foo',
		b: 2,
		c: 'bar',
	};

	/* 对象解构通过 对应的key来进行赋值操作 */
	let { a, c } = obj;

	console.log(a, c);
}

// #endregion 对象解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 对象的反向解构 Code Module

{
	let obj = {
		a: 'foo',
		b: 2,
		c: 'bar',
	};

	/* 对象反向解构， 通过扩展运算符来实现 */
	let { a, ...test_obj } = obj;

	console.log(a); // 'foo'
	console.log(test_obj); // {b: 2, c: 'bar'}
	console.log(a.length + test_obj.b + test_obj.c.length);
}

// #endregion 对象的反向解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 解构后对变量重命名 Code Module

{
	let obj = {
		a: 'foo',
		b: 2,
		c: 'bar',
	};

	/* 对象解构时，重新定义变量名称 */
	let { a: obj_a, b: obj_b, c: obj_c } = obj;
	// let {
	// 	a: obj_a,
	// 	b: obj_b,
	// 	c: obj_c,
	// }: { a: string; b: number; c: string } = obj;

	/* 上面的写法等同于下面这种 */
	// let obj_a = obj.a;
	// let obj_b = obj.b;
	// let obj_c = obj.c;

	console.log(obj_a); // 'foo'
	console.log(obj_b); // 2
	console.log(obj_c); // 'bar'
}

// #endregion 解构后对变量重命名 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 函数的参数解构 Code Module

{
	function f1(who_objet: { a: string; b?: number; c: string }) {
		/* 解构赋值，对b设置默认值 */
		const { a, b = 200, c } = who_objet;

		console.log(a);
		console.log(b);
		console.log(c);
	}
}

// #endregion 函数的参数解构 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region type语法 声明类型 Code Module

{
	type C = { a: string; b?: number };

	function f2({ a, b }: C): void {
		console.log(a);
		console.log(b);
	}
}

// #endregion type语法 声明类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 参数默认值 Code Module

{
	/* 这种参数的解构方式，会自动进行类型推断 */
	function f3({ a = 2, b = 3 } = { a: 4, b: 5 }) {
		console.log(a);
		console.log(b);
	}

	/* 使用默认的对象 {a: 4, b: 5} */
	f3(); // 4 5

	/* 使用传入的对象 {a: 6, b: 7} */
	f3({ a: 6, b: 7 }); // 6 7

	/* 如果传入的对象为空，那么就使用 变量默认值  */
	f3({}); // 2 3
}

// #endregion 参数默认值 Code Module End

// -----------------------------------------分隔符--------------------------------------------
