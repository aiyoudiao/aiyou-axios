/**
 * readonly修饰符只能够被外部访问，但不能被外部修改
 */
// #region readonly 访问修饰符 Code Module
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
    var jwl = new Person('贾文利');
    /* 只读的属性可以在外部访问，但是不能够在外部对它进行修改 */
    // jwl.name = '周培豪';
}
// #endregion readonly 访问修饰符 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 在构造函数参数中使用readonly Code Module
{
    /**
     *	人
     *
     * @class Person
     */
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
            this.name = name;
        }
        return Person;
    }());
    var jwl = new Person('贾文利');
    /* 只读的属性可以在外部访问，但是不能够在外部对它进行修改 */
    jwl.name = '周培豪';
}
// #endregion 在函数参数中使用readonly Code Module End
// -----------------------------------------分隔符--------------------------------------------
