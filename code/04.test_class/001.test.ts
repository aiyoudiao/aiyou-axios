// #region 类基础 Code Module

{
	class Greeter {
		greeting: string;
		constructor(message: string) {
			this.greeting = message;
		}

		greet() {
			return 'Hello，' + this.greeting;
		}
	}

	let greeter = new Greeter('world');
	greeter.greet();
}

// #endregion 类基础 Code Module End

// -----------------------------------------分隔符--------------------------------------------
