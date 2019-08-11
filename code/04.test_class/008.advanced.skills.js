// #region 高级技巧 Code Module
{
    var Greeter_1 = /** @class */ (function () {
        /* 传入的属性如果加了? 表示可传递可不传递 */
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            if (this.greeting) {
                return 'Hello' + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        };
        Greeter.standardGreeting = 'Hello there';
        return Greeter;
    }());
    var greeter = void 0;
    greeter = new Greeter_1();
    console.log(greeter.greet());
    /* 获取类的静态类型 */
    var greeterMark = Greeter_1;
    greeterMark.standardGreeting = 'Hello jwl';
    Greeter_1.standardGreeting = 'Hello zph';
    var greeter2 = void 0;
    greeter2 = new Greeter_1();
    console.log(greeter2.greet());
}
// #endregion 高级技巧 Code Module End
// -----------------------------------------分隔符--------------------------------------------
