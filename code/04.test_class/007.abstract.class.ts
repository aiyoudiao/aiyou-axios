// #region 抽象类 Code Module

{
	abstract class Animal {
		/* 抽象方法是空的方法，可以使用修饰符 private 和 protected，默认不加修饰符就是public */
		abstract makeSound(): void;

		move(): void {
			console.log('move slow');
		}
	}
}

// #endregion 抽象类 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 抽象类不能够直接实例化 Code Module

{
	/**
	 *	部门
	 *
	 * @abstract
	 * @class Department
	 */
	abstract class Department {
		name: string;

		constructor(name: string) {
			this.name = name;
		}

		printName(): void {
			console.log('部门名称 ' + this.name);
			console.log('Department name ' + this.name);
		}

		abstract printMeeting(): void;
	}

	/**
	 *	会计部门
	 *
	 * @class AccountingDepartment
	 * @extends {Department}
	 */
	class AccountingDepartment extends Department {
		constructor() {
			super('Super accountant');
		}

		printMeeting(): void {
			console.log('这是一个举世无双、天下第一的会议。');
			console.log('This is a meeting that is unique in the world.');
		}

		generateReports(): void {
			console.log('生成一份会议报表。');
			console.log('Generate a meeting report.');
		}
	}

	/* 抽象不能够直接进行实例化 */
	// let department: Department = new Department();

	/* 声明这个变量的类型为  Department*/
	let account: Department;
	/* 可以实例化其子类对象，这种方式表示 父类的变量指向其子类的对象引用 */
	account = new AccountingDepartment();

	console.log(account.printName());
	console.log(account.printMeeting());

	/* 父类中没有这个方法，所以无法调用 */
	// console.log(account.generateReports());

	/* 如果要调用这个方法，只能够使用类型断言(类型转换)的方式，将父类对象转换成包含该方法的子类对象 */
	console.log((account as AccountingDepartment).generateReports()); // as
	console.log((<AccountingDepartment>account).generateReports()); // <>
}

// #endregion 抽象类不能够直接实例化 Code Module End

// -----------------------------------------分隔符--------------------------------------------
