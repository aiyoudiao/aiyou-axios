// @ts-check

// #region 简单的函数 Code Module

{
	function printLabel(obj: { label: string }) {
		console.log(obj.label);
	}

	let myObj = { size: 25, label: 'this is size 25 label' };

	printLabel(myObj);
}
// #endregion 简单的函数 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 定义一个接口，并且使用它 Code Module

{
	/* 接口就是 规定 `数据格式的规范`, 接口也是 `功能的约束` */
	/* typescript 中的接口和 其它语言的接口不一样，并不一定要实现这个接口，
    但是至少要这个接口的外形一致 */
	interface LabelValue {
		label: string;
	}

	function printLabel2(obj: LabelValue) {
		console.log(obj.label);
	}

	let myObj = { size: 75, label: 'this is size 75 label' };

	printLabel2(myObj);
}

// #endregion 定义一个接口，并且使用它 Code Module End

// -----------------------------------------分隔符--------------------------------------------
