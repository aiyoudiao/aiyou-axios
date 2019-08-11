/**
 * 存取器：
 * getter 和 setter
 * Accessors are only available when targeting ECMAScript 5 and higher
 * `存取器 仅在 ECMAScript 5及更高版本时可用`
 */
// #region 存取器 Code Module
{
    var passcode_1 = 'ilovejwl';
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (value) {
                if (passcode_1 && passcode_1 === 'ilovejwl') {
                    this._fullName = value;
                }
                else {
                    console.error('Error: No permission to update employee information.');
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    // employee.fullName = 'jwl zph'; // set
    employee.fullName = 'ilovejwl'; // set
    if (employee.fullName) {
        // get
        console.log(employee.fullName);
    }
}
// #endregion 存取器 Code Module End
// -----------------------------------------分隔符--------------------------------------------
