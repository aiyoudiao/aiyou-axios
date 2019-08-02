/**
 * 通过继承来扩展现有的类
 * 子类又名 派生类
 * 基类又名 超类
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
// #region 继承 Code Module
{
    /**
     *	动物
     *
     * @class Animal
     */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("Animal moved " + distance + " m.");
        };
        return Animal;
    }());
    /**
     * 狗
     *
     * @class Dog
     * @extends {Animal}
     */
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super.call(this) || this;
        }
        Dog.prototype.bark = function () {
            console.log('woof woof');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(25);
}
// #endregion 继承 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region  Code Module
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
     *	蛇
     *
     * @class Snack
     * @extends {Animal}
     */
    var Snack = /** @class */ (function (_super) {
        __extends(Snack, _super);
        function Snack(name) {
            return _super.call(this, name) || this;
        }
        Snack.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('twist ...');
            _super.prototype.move.call(this, distance);
        };
        return Snack;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('running wild ...');
            _super.prototype.move.call(this, distance);
        };
        return Horse;
    }(Animal));
    var sna = new Snack('小蛇');
    var hor = new Horse('小马');
    sna.move(55);
    hor.move(1235);
}
// #endregion  Code Module End
// -----------------------------------------分隔符--------------------------------------------
