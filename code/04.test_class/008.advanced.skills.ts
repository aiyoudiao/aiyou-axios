// #region 高级技巧 Code Module
{
	class Greeter {
		static standardGreeting = 'Hello there';

		greeting: string;

		/* 传入的属性如果加了? 表示可传递可不传递 */
		constructor(message?: string) {
			this.greeting = message;
		}

		greet() {
			if (this.greeting) {
				return 'Hello' + this.greeting;
			} else {
				return Greeter.standardGreeting;
			}
		}
	}

	let greeter: Greeter;
	greeter = new Greeter();
	console.log(greeter.greet());

	/* 获取类的静态类型 */
	let greeterMark: typeof Greeter = Greeter;
	/* 以下两种方式都可以 */
	greeterMark.standardGreeting = 'Hello jwl';
	Greeter.standardGreeting = 'Hello zph';

	let greeter2: Greeter;
	greeter2 = new Greeter();
	console.log(greeter2.greet());
}

// #endregion 高级技巧 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 类还可以作为接口来使用 Code Module
{
	/**
	 *	点
	 *
	 * @class Point
	 */
	class Point {
		x: number;
		y: number;
	}

	/**
	 *	3D的点
	 *
	 * @interface Point3D
	 * @extends {Point} 这种方式就将类作为接口来使用了
	 */
	interface Point3D extends Point {
		z: number;
	}

	/* 正常使用 */
	let point3d: Point3D = { x: 1, y: 2, z: 3 };
}
// #endregion 类还可以作为接口来使用 Code Module End

// -----------------------------------------分隔符--------------------------------------------
