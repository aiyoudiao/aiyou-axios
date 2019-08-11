/*
 * @Descripttion: 请输入文件描述信息
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-07 17:28:46
 * @LastEditTime: 2019-08-09 11:05:09
 * @LastEditors: ilovejwl
 */
/**
 * 如果不使用类型保护，就需要检测两个成员是否存在
 * typescript的类型保护一共有三种：自定义类型保护、typeof类型保护、instanceof类型保护
 */

// #region 未使用类型保护，比较麻烦 Code Module

{
	interface Bird {
		fly();
		layEggs();
	}

	interface Fish {
		swim();
		layEggs();
	}

	function getSamllPet(): Fish | Bird {
		return null;
	}

	let pet = getSamllPet();
	/* 不能调用两个类型不相同的成员，但是可以进行类型转换(类型断言) 的方式来强制转换成具体的某一个类型*/
	if ((pet as Fish).swim) {
		(pet as Fish).swim();
	} else if ((pet as Bird).fly) {
		(pet as Bird).fly();
	}
}

// #endregion 未使用类型保护，比较麻烦 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 自定义类型保护 Code Module

{
	interface Bird {
		fly();
		layEggs();
	}

	interface Fish {
		swim();
		layEggs();
	}

	function getSamllPet(): Fish | Bird {
		return null;
	}

	function isFish(pet: Fish) {
		return (pet as Fish).swim !== undefined;
	}

	function isBrid(pet: Bird) {
		return (pet as Bird).fly !== undefined;
	}

	let pet = getSamllPet();
	/* 不能调用两个类型不相同的成员，但是可以进行类型转换(类型断言) 的方式来强制转换成具体的某一个类型*/
	if (isFish(pet)) {
		pet.swim();
	} else if (isBrid(pet)) {
		pet.fly();
	}
}

// #endregion 自定义类型保护 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region typeof 类型保护 Code Module

{
	/**
	 *	是否是数字
	 *
	 * @param {*} x
	 * @returns {x is string}
	 */
	function isNumber(x: any): x is number {
		return typeof x === 'number';
	}

	/**
	 *	是否是个字符串
	 *
	 * @param {*} x
	 * @returns {x is string}
	 */
	function isString(x: any): x is string {
		return typeof x === 'string';
	}

	/**
	 *	填充多少个空格
	 *
	 * @param {string} value
	 * @param {(string | number)} padding
	 * @returns
	 */
	function padLeft(value: string, padding: string | number) {
		/* 也不一定要写函数，直接使用 typeof padding === 'number' 也可以实现typescript的类型的保护机制 */
		if (isNumber(padding)) {
			return Array(padding + 1).join(' ') + value;
		}

		/* 也不一定要写函数，直接使用 typeof padding === 'string' 也可以实现typescript的类型的保护机制 */
		if (isString(padding)) {
			return padding + value;
		}

		throw new Error(
			`The type of ${padding} can only be one of a string and a number`,
		);
	}

	console.log(padLeft('ilovejwl', 20));
	console.log(padLeft('ilovejwl', 'zph'));
	/* 将any类型设置为 具体的联合类型之后，下面的代码就无法通过正常编译了 */
	// console.log(padLeft('ilovejwl', true));
}

// #endregion typeof 类型保护 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region instanceof 类型保护 Code Module

{
	class Bird {
		fly() {}
		layEggs() {}
	}

	class Fish {
		swim() {}
		layEggs() {}
	}

	/**
	 *	获取随机的宠物
	 *
	 * @returns {(Fish | Bird)}
	 */
	function getRandomPet(): Fish | Bird {
		return Math.random() > 0.5 ? new Fish() : new Bird();
	}

	let pet = getRandomPet();

	/* 判断pet是哪个类的实例，这里会触发typescript的类型保护 */

	if (pet instanceof Fish) {
		pet.swim();
	}
	if (pet instanceof Bird) {
		pet.fly();
	}
}

// #endregion instanceof 类型保护 Code Module End

// -----------------------------------------分隔符--------------------------------------------
