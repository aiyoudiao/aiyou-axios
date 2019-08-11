/**
 * 访问修饰符默认是 public
 * private： 只能在当前类的内部使用
 * protected：只能在当前类及其子类的内部使用
 * public: 可以供这个类的实例对象以及其子类的实例对象在内部或者外部使用
 */

// #region private 访问修饰符 Code Module
{
	/**
	 *	动物
	 *
	 * @class Animal
	 */
	class Animal {
		/* 无法在外界通过实例对象.成员的使用了 */
		private name: string;

		constructor(name: string) {
			this.name = name;
		}

		move(distance: number = 0) {
			console.log(`${this.name} moved ${distance} m.`);
		}
	}

	/**
	 *	犀牛
	 *
	 * @class Rhino
	 * @extends {Animal}
	 */
	class Rhino extends Animal {
		constructor() {
			super('rhino running wild');
		}
	}

	/**
	 *	员工
	 *
	 * @class Employee
	 */
	class Employee {
		private name: string;

		constructor(name: string) {
			this.name = name;
		}
	}

	let animal = new Animal('动物');
	let rhino = new Rhino();
	/* 子类实例可以赋值给父类实例 */
	animal = rhino;

	let employee = new Employee('超级员工');
	/* 非子类实例不可以赋值给父类实例 */
	// animal = employee;
}
// #endregion private 访问修饰符 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region protected 访问修饰符 Code Module
{
	/**
	 *	人
	 *
	 * @class Person
	 */
	class Person {
		protected name: string;

		/* 构造函数也可以标记为 protected，
        这样外部就不能直接new这个构造函数了，否则会在编译的时候报异常
        只能够在子类中通过`super()`去调用 */
		// protected constructor(name: string) {
		// 	this.name = name;
		// }

		constructor(name: string) {
			this.name = name;
		}
	}

	/**
	 *	员工
	 *
	 * @class Employee
	 */
	class Employee extends Person {
		private department: string;

		constructor(name: string, department: string) {
			super(name);
			this.department = department;
		}

		getSelfIntroduction() {
			return `Hello，my name is ${this.name} and I work in ${this.department}.`;
		}
	}

	let jwl = new Employee('贾文利', '啥部');
	console.log(jwl.getSelfIntroduction());

	/* 父类中的name 是受保护的，所以只能够在子类内部使用，从外部访问是不行的 */
	// console.log(jwl.name);

	/* 当Person中的constructor 加上了protected修饰符时，就不能直接new这个类的构造函数了*/
	// let person = new Person('周培豪');
}

// #endregion protected 访问修饰符 Code Module End

// -----------------------------------------分隔符--------------------------------------------
