// #region 抽象类 Code Module
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log('move slow');
        };
        return Animal;
    }());
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
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('部门名称 ' + this.name);
            console.log('Department name ' + this.name);
        };
        return Department;
    }());
    /**
     *	会计部门
     *
     * @class AccountingDepartment
     * @extends {Department}
     */
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Super accountant') || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('这是一个举世无双、天下第一的会议。');
            console.log('This is a meeting that is unique in the world.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('生成一份会议报表。');
            console.log('Generate a meeting report.');
        };
        return AccountingDepartment;
    }(Department));
    /* 抽象不能够直接进行实例化 */
    // let department: Department = new Department();
    /* 可以实例化其子类对象，这种方式表示 父类的变量指向其子类的对象引用 */
    var account = new AccountingDepartment();
    console.log(account.printName());
    console.log(account.printMeeting());
    /* 父类中没有这个方法，所以无法调用 */
    // console.log(account.generateReports());
    /* 如果要调用这个方法，只能够使用类型断言(类型转换)的方式，将父类对象转换成包含该方法的子类对象 */
    console.log(account.generateReports()); // as
    console.log(account.generateReports()); // <>
}
// #endregion 抽象类不能够直接实例化 Code Module End
// -----------------------------------------分隔符--------------------------------------------
