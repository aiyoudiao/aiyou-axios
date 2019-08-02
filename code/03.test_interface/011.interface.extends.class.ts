/**
 * 接口继承类，会继承这个类的成员，但是不包括实现
 * 接口继承了类的私有成员和受保护的成员时，只能被这个类或者其子类实现
 *
 * 接口继承类，使用场景并不是很多，但是当你开发一个庞大的结构的时候就会用到了。
 **/

// #region 接口继承类 Code Module

{
	class Control {
		private state: any;
	}

	interface SelectableControl extends Control {
		select();
	}

	class Button extends Control implements SelectableControl {
		select() {}
	}

	class TextBox extends Control {
		select() {}
	}

	/* 这样不行，因为ImageC没有继承Control，
	 * 所以实现这个接口的时候会报错，因为这个接口继承了Contrl 类的私有成员state
	 **/
	// class ImageC implements SelectableControl {
	// 	select() {}
	// }
}

// #endregion 接口继承类 Code Module End

// -----------------------------------------分隔符--------------------------------------------
