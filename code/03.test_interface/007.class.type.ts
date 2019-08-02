// #region 类类型 Code Module

{
	interface ClockInterface {
		currentTime: Date;
		startTime(d: Date);
	}

	/* 类实现 实例接口 */
	class Clock implements ClockInterface {
		currentTime: Date;
		constructor(h: number, m: number) {}
		startTime(d: Date) {
			this.currentTime = d;
		}
	}
}

// #endregion 类类型 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 类实现实现一个带有构造器的接口 Code Module
{
	interface ClockContructor {
		new (hour: number, minute: number);
	}

	/* 类实现不了 非实例接口接口 */
	class Clock implements ClockContructor {
		currentTime: Date;
		constructor({ hour, minute }: { hour: number; minute: number }) {}
		startTime(d: Date) {
			this.currentTime = d;
		}
	}
}
// #endregion 类实现实现一个带有构造器的接口 Code Module End

// -----------------------------------------分隔符--------------------------------------------
