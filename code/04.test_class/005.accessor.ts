/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-03 07:33:25
 * @LastEditTime: 2019-08-09 13:17:30
 * @LastEditors: ilovejwl
 */
/**
 * 存取器：
 * getter 和 setter
 * Accessors are only available when targeting ECMAScript 5 and higher
 * `存取器 仅在 ECMAScript 5及更高版本时可用`
 * 在es5中是通过Object.defineProperty来实现的
 */

// #region 存取器 Code Module

{
	let passcode = 'ilovejwl';

	class Employee {
		private _fullName: string;
		public get fullName(): string {
			return this._fullName;
		}
		public set fullName(value: string) {
			if (passcode && passcode === 'ilovejwl') {
				this._fullName = value;
			} else {
				console.error('Error: No permission to update employee information.');
			}
		}
	}

	let employee = new Employee();
	// employee.fullName = 'jwl zph'; // set
	employee.fullName = 'ilovejwl'; // set
	if (employee.fullName) {
		// get
		console.log(employee.fullName);
	}
}

// #endregion 存取器 Code Module End

// -----------------------------------------分隔符--------------------------------------------
