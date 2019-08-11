/**
 * 函数的参数个数和 函数期望格式是一致的
 */

// #region 必传参数 Code Module

{
	function buildName(firstName: string, lastName: string): string {
		return firstName + ' ' + lastName;
	}

	/* 定义了函数的参数签名之后，你使用这个函数时，必须要传入的参数个数及类型 都要一致才行
	 * 下面参数的个数不符合要求
	 * */
	// let result1 = buildName('i');
	// let result1 = buildName('i', 'love', 'jwl');
	//
}

// #endregion 必传参数 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 可选参数 Code Module
{
	/* 给参数加一个? 表示可选参数 */
	function buildName2(firstName: string, lastName?: string): string {
		if (lastName) {
			return firstName + ' ' + lastName;
		} else {
			return firstName;
		}
	}

	/* 定义了可选的函数签名之后，你使用这个函数时，可选的参数，可传可不传 */
	let result1 = buildName2('i');
	let result2 = buildName2('i', 'love jwl');
}

// #endregion 可选参数 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 默认参数 Code Module

{
	/* 设置默认值 */
	function buildName3(
		firstName: string,
		lastName: string = 'ilovejwl',
	): string {
		return firstName + ' ' + lastName;
	}

	/* 使用了函数默认参数之后，需要注意参数顺序，否则不行 */
	let result1 = buildName3('i');

	/* 第二个参数的默认值，只有当没有传入数据或者传入undefined是才会生效 */
	let result2 = buildName3('i', undefined);
	let result3 = buildName3('i', 'love jwl');
}

// #endregion 默认参数 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 剩余参数 Code Module

{
	/* 剩余参数 是将不限数量的参数 填充到一个数组变量中，剩余参数是一个非常好用的语法 */
	function buildName4(firstName: string, ...restOfName: string[]): string {
		return firstName + ' ' + restOfName.join(' ');
	}

	/* 从函数签名中可以看出，剩余参数是从第二个参数位置开始算起，同时剩余参数是可传可不传的 */
	let result1 = buildName4('i');
	let result2 = buildName4('i', 'love', 'jwl', ' day');
	console.log(result1);
	console.log(result2);
}

// #endregion 剩余参数 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 声明一个变量来接收 带有剩余参数的函数 Code Module
{
	/* 剩余参数 是将不限数量的参数 填充到一个数组变量中 */
	function buildName5(firstName: string, ...restOfName: string[]): string {
		return firstName + ' ' + restOfName.join(' ');
	}

	/* 声明一个相同签名的函数变量 去接收对应参数签名的函数 */
	let buildNameFunc: (fName: string, ...rest: string[]) => string = buildName5;
}
// #endregion 声明一个变量来接收 带有剩余参数的函数 Code Module End

// -----------------------------------------分隔符--------------------------------------------
