/**
 * 访问修饰符默认是 public
 */
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
// #region private 访问修饰符 Code Module
{
    /**
     *	动物
     *
     * @class Animal
     */
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " moved " + distance + " m.");
        };
        return Animal;
    }());
    /**
     *	犀牛
     *
     * @class Rhino
     * @extends {Animal}
     */
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, 'rhino running wild') || this;
        }
        return Rhino;
    }(Animal));
    /**
     *	员工
     *
     * @class Employee
     */
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    var animal = new Animal('动物');
    var rhino = new Rhino();
    /* 子类实例可以赋值给父类实例 */
    animal = rhino;
    var employee = new Employee('超级员工');
    /* 非子类实例不可以赋值给父类实例 */
    // animal = employee;
}
// #endregion private 访问修饰符 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region protected 访问修饰符 Code Module
{
    /**
     *	人
     *
     * @class Person
     */
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    /**
     *	员工
     *
     * @class Employee
     */
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getSelfIntroduction = function () {
            return "Hello\uFF0Cmy name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var jwl = new Employee('贾文利', '啥部');
    console.log(jwl.getSelfIntroduction());
}
// #endregion protected 访问修饰符 Code Module End
// -----------------------------------------分隔符--------------------------------------------
