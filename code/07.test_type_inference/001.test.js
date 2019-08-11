/**
 * 类型推断：会根据你的赋值自动推断出这是个什么类型
 *
 * 最佳通用类型： 是编译器会根据你的数据推断出最合适的类型，从而可以涵盖你指定的所有数据类型
 *
 * 上下文类型：是一个非常有用的类型推断，在很多情况下都会使用到，也就是显式的指明准确的数据类型。
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
// #region 类型推断 Code Module
{
    /* 自动推断这个变量是个数字 */
    var x = 3;
}
// #endregion 类型推断 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 最佳通用类型 Code Module
{
    var x = [0, 1, null];
    /**
     *	动物
     *
     * @class Animal
     */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    /**
     *	蜜蜂🐝
     *
     * @class Bee
     * @extends {Animal}
     */
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
    /**
     * 狮子🦁
     *
     * @class Lion
     * @extends {Animal}
     */
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    /* 这里自动推断会将这个数组的类型推断为一个联合的数组类型 (Bee | Lion)[] */
    var zoo1 = [new Bee(), new Lion()];
    /* 明确声明为一个Animal的数组 */
    var zoo2 = [new Bee(), new Lion()];
}
// #endregion 最佳通用类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 上下文类型 Code Module
{
    /* 根据window.onmousedown的数据类型来推断 函数参数的数据类型 */
    window.onmousedown = function (mouseEvent) {
        /* 编译器推断出这个参数没有这个成员，所以就会在编译的时候报错 */
        // console.log(mouseEvent.clickTime);
    };
    /* 显式的声明这个参数的数据类型，或者通过设置any来跳过类型检查 */
    window.onmousedown = function (mouseEvent) {
        /* 将mouseEvent设置为any之后，直接跳过编译器的类型检查，成功编译 */
        console.log(mouseEvent.clickTime);
    };
}
// #endregion 上下文类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 上下文类型2 Code Module
{
    /**
     *	动物
     *
     * @class Animal
     */
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    /**
     *	蜜蜂🐝
     *
     * @class Bee
     * @extends {Animal}
     */
    var Bee_1 = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
    /**
     * 狮子🦁
     *
     * @class Lion
     * @extends {Animal}
     */
    var Lion_1 = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    /* 这里的上下文类型是 显示声明的 Animal[]类型 */
    function createZoo() {
        return [new Bee_1(), new Lion_1()];
    }
}
// #endregion 上下文类型2 Code Module End
// -----------------------------------------分隔符--------------------------------------------
