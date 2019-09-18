/**
 * readonly修饰符只能够被外部访问，但不能被外部修改
 * 这个readonly 修饰符可以在属性声明的时候使用，也可以在构造函数中使用，
 * 同理的还有 private和protected，它们也支持在构造函数中使用
 * 但是，最好都在声明属性的时候使用，这样在构建一个庞大的类结构时，可读性较好一些。
 */
   
// #region readonly 访问修饰符 Code Module

{
	/**
	 *	人
	 *
	 * @class Person
	 */
	class Person {
		readonly name: string;

		constructor(name: string) {
			this.name = name;
		}
	}

	let jwl = new Person('贾文利');
	/* 只读的属性可以在外部访问，但是不能够在外部对它进行修改 */
	// jwl.name = '周培豪';
}

// #endregion readonly 访问修饰符 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 在构造函数参数中使用readonly Code Module

{
	/**
	 *	人
	 *
	 * @class Person
	 */
	class Person {
		/* 除了可以使用readonly之外，也可以使用private、protected */
		constructor(readonly name: string) {
			this.name = name;
		}
	}

	let jwl = new Person('贾文利');
	/* 和上面一样的效果，可以在外部访问，但是不能够在外部对它进行修改 */
	// jwl.name = '周培豪';
}

// #endregion 在函数参数中使用readonly Code Module End

// -----------------------------------------分隔符--------------------------------------------
