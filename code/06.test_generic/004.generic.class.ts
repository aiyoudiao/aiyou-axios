/**
 * 泛型类时将类型放在类的后面，它可以帮助你确认类中的属性的相同类型，非常的方便。
 *
 * 类包括两个部分，一个静态部分，一个实例部分，
 * 泛型类实际上是指类的实例部分，静态部分的属性实际上不允许使用泛型
 */

// #region 泛型类 Code Module

{
	class GenericNumber<T> {
		zeroValue: T;
		add: (x: T, y: T) => T;
	}

	let myGenericNumber = new GenericNumber<number>();
	myGenericNumber.zeroValue = 0;
	myGenericNumber.add = function(x, y) {
		return x + y;
	};

	let stringNumberic = new GenericNumber<string>();
	stringNumberic.zeroValue = '';
	stringNumberic.add = function(x, y) {
		return x + y;
	};

	console.log(stringNumberic.add(stringNumberic.zeroValue, 'i love jwl'));
}

// #endregion 泛型类 Code Module End

// -----------------------------------------分隔符--------------------------------------------
