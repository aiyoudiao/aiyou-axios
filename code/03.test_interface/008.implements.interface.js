/**
 * 定义类的接口时，会有两种
 * 一种是类的实例接口（类的实例部分），一种是类的构造器接口（类的静态部分）
 * 针对你的需要来使用不同的`类的接口`
 */
// #region 继承接口 Code Module
{
    /**
     * 创建一个时钟
     *
     * @param {ClockConstructor} ctor 构造函数
     * @param {number} hour 小时
     * @param {number} minute 分钟
     * @returns {ClockInterface} 返回一个实现了始终接口的实例
     */
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    /**
     * 数字时钟
     *
     * @class DigitalClock
     * @implements {ClockInterface} 返回一个实现时钟接口的实例
     */
    var DigitalClock = /** @class */ (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.info('beep beep beep');
        };
        return DigitalClock;
    }());
    /**
     * 模拟时钟
     *
     * @class AnalogClock
     * @implements {ClockInterface}  返回一个实现时钟接口的实例
     */
    var AnalogClock = /** @class */ (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log('tick toc');
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 16, 49);
    var analog = createClock(AnalogClock, 7, 10);
}
// #endregion 继承接口 Code Module End
// -----------------------------------------分隔符--------------------------------------------
