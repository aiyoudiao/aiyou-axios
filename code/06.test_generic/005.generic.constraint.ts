// #region 泛型约束：一定要存在该成员 Code Module

{
	/* 以这种方式，就可以解决函数内部arg.length的报错问题，但是还是治标不治本 */
	function logginIdentity1<T>(arg: T[]): T[] {
		console.log(arg.length);
		return arg;
	}

	/* 通过对这个类型T做一个约束，从而解决内部的arg.length的报错问题 */

	/* 定义一个 接口 */
	interface Lengthwise {
		length: number;
	}

	/* 让泛型 T 继承一个有length属性的接口*/
	function logginIdentity2<T extends Lengthwise>(arg: T): T {
		console.log(arg.length);
		return arg;
	}

	/* 使用这个方法时，如果传入的值没有length属性就会报错，数字没有length属性 */
	// logginIdentity2(123);

	/* 字符串和数组有length属性 */
	logginIdentity2<string>('ilovejwl');
	logginIdentity2<number[]>([1, 2, 3, 4, 5]);

	/* 带有length属性的对象也是可以的 */
	logginIdentity2<any>({ length: 2 });
}

// #endregion 泛型约束：一定要存在该成员 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 泛型约束：指定key 一定要在对象中存在 Code Module

{
	/* 泛型K 一定得是 泛型T中的key */
	function getProperty<T, K extends keyof T>(obj: T, key: K) {
		return obj[key];
	}

	let x = { a: 1, b: 2, c: 3, d: 4 };

	/* 可以正常的取值 */
	console.log(getProperty(x, 'a'));

	console.log(getProperty(x, 'b'));

	/* 3 并不在 这个对象的key中 */
	// getProperty(x, 3);
}

// #endregion 泛型约束：指定key 一定要在对象中存在 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 泛型约束：传入的变量一定要是一个可以new出来 Code Module

{
	/* 传入的是一个可以 new 的变量，这也是类类型在工厂函数中的一个应用 */
	function create<T>(c: { new (): T }): T {
		return new c();
	}
}

// #endregion 泛型约束：传入的变量一定要是一个可以new出来 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 泛型约束：综合案例 Code Module

{
	/**
	 *	养蜂人
	 *
	 * @class BeeKeeper
	 */
	class BeeKeeper {
		hasMask: boolean;
	}

	/**
	 *	养狮者
	 *
	 * @class LionKeeper
	 */
	class LionKeeper {
		nametag: string;
	}

	/**
	 *	动物
	 *
	 * @class Animal
	 */
	class Animal {
		numLengs: number;
	}

	/**
	 *	蜜蜂🐝
	 *
	 * @class Bee
	 * @extends {Animal}
	 */
	class Bee extends Animal {
		keeper: BeeKeeper;
	}

	/**
	 * 狮子🦁
	 *
	 * @class Lion
	 * @extends {Animal}
	 */
	class Lion extends Animal {
		keeper: LionKeeper;
	}

	/**
	 *	创建实例
	 *
	 * @template T
	 * @param {{ new (): T }} c
	 * @returns {T}
	 */
	function createInstance<T extends Animal>(c: { new (): T }): T {
		return new c();
	}

	/* 会进行自动推导 */
	let bee: Bee = createInstance(Bee);
	bee.keeper = new BeeKeeper();
	/* 可以直接.出相关的成员 */
	console.log(bee.keeper.hasMask);

	/* 会进行自动推导 */
	let lion: Lion = createInstance(Lion);
	lion.keeper = new LionKeeper();
	/* 可以直接.出相关的成员 */
	console.log(lion.keeper.nametag);
}

// #endregion 泛型约束：综合案例 Code Module End

// -----------------------------------------分隔符--------------------------------------------
