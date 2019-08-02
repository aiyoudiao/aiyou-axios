// #region 类基础 Code Module
{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello，' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('world');
    greeter.greet();
}
// #endregion 类基础 Code Module End
// -----------------------------------------分隔符--------------------------------------------
