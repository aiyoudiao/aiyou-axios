// #region 类类型 Code Module
{
    /* 类实现接口 */
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.startTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
// #endregion 类类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 类实现实现一个带有构造器的接口 Code Module
{
    /* 类实现接口 */
    var Clock = /** @class */ (function () {
        function Clock(_a) {
            var hour = _a.hour, minute = _a.minute;
        }
        Clock.prototype.startTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
// #endregion 类实现实现一个带有构造器的接口 Code Module End
// -----------------------------------------分隔符--------------------------------------------
