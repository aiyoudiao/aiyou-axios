// #region 将泛型T作为参数的一部分来使用，从而增强容错性 Code Module

{
	/* 一个函数返回对应传入的参数类型的值  通过`泛型`来实现 */
	function identity<T>(arg: T): T {
		return arg;
	}
	/* 设置泛型T，传入参数的时候，不讲类型T作为类型的全部来使用，而是将 */
	function logginIdentity<T>(arg: T[]): T[] {
		console.log(arg.length);
		return arg;
	}
}

// #endregion 将泛型T作为参数的一部分来使用，从而增强容错性 Code Module End

// -----------------------------------------分隔符--------------------------------------------
