// #region 使用泛型类型 Code Module

{
	function identity<T>(arg: T): T {
		return arg;
	}

	/* 声明泛型方法，只针对当前变量 */
	let myIndentity: <U>(arg: U) => U = identity;

	/* 声明泛型对象，只针对当前变量 */
	let myIndentity2: { <T>(arg: T): T } = identity;

	/* 普通接口中的泛型方法，只针对那一个方法 */
	interface GnericIndentityFn {
		/* 定义泛型方法的签名 */
		<T>(arg: T): T;
	}

	let myIndentity3: GnericIndentityFn = identity;

	/* 定义泛型接口 */
	interface GnericIndentityFn1<T> {
		/* 接口中所有地方都能够使用这个泛型T */
		(arg: T): T;
	}

	/* 在使用的时候，直接设置类型为 number，这种方式比较推荐 */
	let myIndentity4: GnericIndentityFn1<number> = identity;
}

// #endregion 使用泛型类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------
