// #region 泛型约束：一定要存在该成员 Code Module
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
    /* 以这种方式，就可以解决函数内部arg.length的报错问题，但是还是治标不治本 */
    function logginIdentity1(arg) {
        console.log(arg.length);
        return arg;
    }
    /* 让泛型 T 继承一个有length属性的接口*/
    function logginIdentity2(arg) {
        console.log(arg.length);
        return arg;
    }
    /* 使用这个方法时，如果传入的值没有length属性就会报错，数字没有length属性 */
    // logginIdentity2(123);
    /* 字符串和数组有length属性 */
    logginIdentity2('ilovejwl');
    logginIdentity2([1, 2, 3, 4, 5]);
    /* 带有length属性的对象也是可以的 */
    logginIdentity2({ length: 2 });
}
// #endregion 泛型约束：一定要存在该成员 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 泛型约束：指定key 一定要在对象中存在 Code Module
{
    /* 泛型K 一定得是 泛型T中的key */
    function getProperty(obj, key) {
        return obj[key];
    }
    var x = { a: 1, b: 2, c: 3, d: 4 };
    /* 可以正常的取值 */
    console.log(getProperty(x, 'a'));
    console.log(getProperty(x, 'b'));
    /* 3 并不在 这个对象的key中 */
    // getProperty(x, 3);
}
// #endregion 泛型约束：指定key 一定要在对象中存在 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 泛型约束：传入的变量一定要是一个可以new出来 Code Module
{
    /* 传入的是一个可以 new 的变量，这也是类类型在工厂函数中的一个应用 */
    function create(c) {
        return new c();
    }
}
// #endregion 泛型约束：传入的变量一定要是一个可以new出来 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 泛型约束：综合案例 Code Module
{
    /**
     *	养蜂人
     *
     * @class BeeKeeper
     */
    var BeeKeeper = /** @class */ (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    /**
     *	养狮者
     *
     * @class LionKeeper
     */
    var LionKeeper = /** @class */ (function () {
        function LionKeeper() {
        }
        return LionKeeper;
    }());
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
    /**
     *	创建实例
     *
     * @template T
     * @param {{ new (): T }} c
     * @returns {T}
     */
    function createInstance(c) {
        return new c();
    }
    /* 会进行自动推导 */
    var bee = createInstance(Bee);
    bee.keeper = new BeeKeeper();
    /* 可以直接.出相关的成员 */
    console.log(bee.keeper.hasMask);
    /* 会进行自动推导 */
    var lion = createInstance(Lion);
    lion.keeper = new LionKeeper();
    /* 可以直接.出相关的成员 */
    console.log(lion.keeper.nametag);
}
// #endregion 泛型约束：综合案例 Code Module End
// -----------------------------------------分隔符--------------------------------------------
