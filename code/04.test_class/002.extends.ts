/**
 * 通过继承来扩展现有的类
 * 子类又名 派生类
 * 基类又名 超类
 *
 * 注意点：
 *      子类构造函数中一定要调用父类的构造函数，通过super() 来调用
 *      子类中调用父类中的方法，通过super.方法名来调用父类中的方法
 */

// #region 继承 Code Module

{
	/**
	 *	动物
	 *
	 * @class Animal
	 */
	class Animal {
		constructor() {}

		move(distance: number = 0) {
			console.log(`Animal moved ${distance} m.`);
		}
	}

	/**
	 * 狗
	 *
	 * @class Dog
	 * @extends {Animal}
	 */
	class Dog extends Animal {
		constructor() {
			super();
		}

		bark() {
			console.log('woof woof');
		}
	}

	const dog = new Dog();
	dog.bark();
	dog.move(25);
}

// #endregion 继承 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region  Code Module

{
	/**
	 *	动物
	 *
	 * @class Animal
	 */
	class Animal {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		move(distance: number = 0) {
			console.log(`${this.name} moved ${distance} m.`);
		}
	}

	/**
	 *	蛇
	 *
	 * @class Snack
	 * @extends {Animal}
	 */
	class Snack extends Animal {
		constructor(name: string) {
			/* 调用父类构造函数，必须放到构造函数的第一行，这个一个规则 */
			super(name);
		}

		move(distance: number = 5) {
			console.log('twist ...');
			// super关键字指向父类
			super.move(distance);
		}
	}

	/**
	 *	马
	 *
	 * @class Horse
	 * @extends {Animal}
	 */
	class Horse extends Animal {
		constructor(name: string) {
			super(name);
		}

		move(distance: number = 5) {
			console.log('running wild ...');
			super.move(distance);
		}
	}

	let sna = new Snack('小蛇');
	let hor: Animal = new Horse('小马');

	sna.move(55);
	hor.move(1235);
}

// #endregion  Code Module End

// -----------------------------------------分隔符--------------------------------------------
