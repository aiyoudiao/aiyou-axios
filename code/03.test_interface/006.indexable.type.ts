/**
 * 重点：这个地方优点绕，主要看签名的类型，
 * [index: string] 表示这个index为string类型， 如：arr['test']
 * [index: number] 表示这个index为number类型， 如：arr[0]
 *
 * 这两种可索引类型在接口中同时使用时，需要注意这几点
 * 签名类型为数字时， 数字签名的返回值必须是字符串签名返回值的子类型
 * 如 Dog是Animal的子类型，x的索引签名类型为number，y的索引签名类型为string
 *      Dog extends Animal
 * 		    [x: number]: Dog;
 *		    [y: string]: Animal;
 */

// #region 定义可索引的类型 Code Module

{
	interface StringArray {
		/* 索引签名
            typescript支持两种索引签名类型，字符串string 和 数字 numebr
            [索引签名名称: 签名类型]，签名名称自定义，签名类型只能是数字或者字符串
            在同时使用时，数字类型签名的返回值，必须是字符串类型签名返回值的子类型
        */
		[index: number]: string;
	}

	let my_string_arr: StringArray;

	my_string_arr = ['test', 'string', 'array'];

	/* 通过索引来取值 */
	let my_string = my_string_arr[0];
}

// #endregion 定义可索引的类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 索引签名的类型，数字签名的返回值必须是字符串签名的子类型 Code Module

{
	// TODO: 数字签名的返回值必须是字符串签名返回值的子类型

	/* 父类型 */
	class Animal {
		name: string;
	}

	/* 子类型 */
	class Dog extends Animal {
		breed: string;
	}

	interface NotKey {
		/* 这样是不行的，数字签名返回值必须是字符串签名返回值的子类型 */
		// [x: number]: Animal;
		// [y: string]: Dog;

		/* 这样是可以的，Dog是Animal的子类型 */
		[x: number]: Dog;
		[y: string]: Animal;
	}
}

// #endregion 索引签名的类型，数字签名的返回值必须是字符串签名的子类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 索引签名的注意点 Code Module

{
	interface NumberDictionary {
		/* 已经定义了索引签名的类型为string，同时也定义了返回值为number */
		[index: string]: number;

		/* 这样是可以的，符合上面定义的索引签名类型 以及返回值 */
		length: number;

		/* 这个地方的name1 实际上是 'name1'，所以返回值必须是 number */
		// name1: string;
	}
}

// #endregion 索引签名的注意点 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 设置索引签名为只读的 Code Module

interface ReadonlyStringArray {
	/* 只读 索引签名的类型为数字，索引签名的返回值为字符串 */
	readonly [index: number]: string;
}

let my_array: ReadonlyStringArray = ['test', 'readonly', 'string', 'array'];

/* 设置签名索引为只读的 , 不允许重新赋值*/
// myArray[0] = 'haha';

// #endregion 设置索引签名为只读的 Code Module End

// -----------------------------------------分隔符--------------------------------------------
