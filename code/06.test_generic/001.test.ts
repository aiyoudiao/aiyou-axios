// #region 泛型基础 Code Module

{
	/* 一个函数返回对应传入的参数类型的值 */
	function identity(arg: number): number {
		return arg;
	}

	/* 一个函数返回对应传入的参数类型的值  通过any来实现 */
	function identity2(arg: any): any {
		return arg;
	}

	/* 一个函数返回对应传入的参数类型的值  通过`泛型`来实现 */
	function identity3<T>(arg: T): T {
		return arg;
	}

	/* 使用泛型的时候，直接显式的声明 */
	let result = identity3<string>('my_string');
	console.log(result);

	/* 使用泛型的时候，使用编译器的类型推断 */
	let result2 = identity3('my_string_2');
	console.log(result2);
}

// #endregion 泛型基础 Code Module End

// -----------------------------------------分隔符--------------------------------------------
