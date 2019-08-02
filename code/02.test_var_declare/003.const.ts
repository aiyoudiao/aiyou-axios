/**
 * let 和 const 起始作用差不多，
 * 但是，当你有计划去修改变量的值，那就使用let，如果不计划去修改变量的值，那就使用const
 */

// #region const 是有let 相同的作用域，不同的是，不允许再改变量的的引用 Code Module

{
	const only_cat = '黑猫警长';

	/* 普通变量重新赋值会报错 */
	// only_cat = '一只耳';

	/* 不能改变的变量指向的引用 */
	const kitty_cat = {
		name: 'smallKitty',
		age: 8,
	};
	/* 可以改变对象的成员值 */
	kitty_cat.age = 123;
	/* ts 中不允许新增对象内部的成员 */
	// kitty_cat.sex = 'man';

	console.log(kitty_cat);
}

// #endregion const 是有let 相同的作用域，不同的是，不允许再改变量的的引用 Code Module End

// -----------------------------------------分隔符--------------------------------------------
