// @ts-check
// #region 布尔值 Boolean Code Module
/* 布尔值 */
var isDone = false;
// #endregion 布尔值 Boolean Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 数字 Number Code Module
/* 二进制值 */
var binaryLiteral = 20;
/* 八进制值 */
var octalLiteral = 20;
/* 十进制值 */
var decLiteral = 20;
/* 十六禁值 */
var hexLiteral = 0x14;
// #endregion 数字 Number Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 字符串 Code Module
/* 字符串可以使用 单引号 ''、双引号 ""、反引号 `` */
var descroption = 'ilovejwl';
// #endregion 字符串 Code Module End
// #region 数组 Array Code Module
/* 字面量定义 */
var list = [1, 2, 3];
/* 泛型定义 */
var list2 = [1, 2, 3];
// #endregion 数组 Array Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 元组 Tuple Code Module
/* 元素中的值和前面定义的数据类型必须要一致 */
var x = [10, 'hello'];
/* 使用元组时会有强类型推断，可以快速给出该类型数据的api补全 */
x[0].toFixed(2);
x[1].toLowerCase();
// NOTE: 这个不行噢，自从 TyeScript 3.1 版本之后，访问越界元素会报错
// /* 当访问一个越界的元素，会使用联合类型替代 number|string*/
// x[3] = 'world';
// console.log(x[5].toString());
// #endregion 元组 Tuple Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 枚举 enum Code Module
{
    /* 取枚举默认值，从0开始 */
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    /* 内部是这样的
    { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 } */
    var c = Color.Green;
    console.log(c);
}
{
    /* 手动设置 值从1开始，默认清空下后面的值依次递增+1*/
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
        Color[Color["Puple"] = 4] = "Puple";
    })(Color || (Color = {}));
    var c = Color.Green;
    console.log(c);
}
{
    /* 手动设置 所有值重新设置 */
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    console.log(c);
}
// #endregion 枚举 enum Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 任何 any Code Module
/* any 指定的变量 直接越过类型检测器，直接通过编译阶段 */
var noSure = 8;
noSure = 'i love jwl';
noSure = false;
/* 指定多种数据类型的数组 */
var mutiple_list = [1, true, 'free'];
mutiple_list[1] = true;
// #endregion 任何 any Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 空类型 void  Code Module
/* 当函数没有任何返回值，可以使用void来进行声明 */
function warnJWL() {
    console.log('ilovejwl');
}
/* 声明一个 空类型的变量 */
var unsable = undefined;
var unsable2 = null;
// #endregion 空类型 void  Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region null 和 undefined Code Module
/* 和 void相似，但是用处不大 */
{
    var u = undefined;
    var n = null;
    console.log(u, n);
}
/* 这两个类型是所有类型的子类型，子类型可以赋值给父类型 */
{
    var u2 = undefined;
    var n2 = null;
    console.log(u2, n2);
}
/* 联合类型 */
{
    var u3 = undefined;
    var n3 = null;
    console.log(u3, n3);
}
// #endregion null 和 undefined Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 不安全类型 never Code Module
/* 无法到达的终点 包含 抛出异常、不会有返回值 函数表达式或箭头函数 */
function error(message) {
    throw new Error(message);
}
/* 推荐出返回的数据类型为 never */
function fail() {
    return error('一直失败。');
}
/* 返回never 的函数必须 无法到达终点 */
function infiniteLoop() {
    /* 死循环 就无法到达终点 */
    while (true) { }
}
create({ prop: 0 });
create(null);
// create(20); // 不行
// #endregion 非原始类型 object Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 类型断言 Code Module
/* ========================================================================================= */
/* 编译阶段的类型转换，当你清楚准确的数据类型时，可以这样转换，实际上并没有真正的转换，只是针对编译器 */
/* ========================================================================================= */
/* 第一种方式：尖括号语法 */
{
    var some_value = 'ilovejwl';
    var some_lengeh = some_value.length;
    console.log(some_lengeh);
}
/* 第二种方式：as语法 */
/* as 语法 可读性更好 */
{
    var some_value = 'ilovejwl';
    var str_length = some_value.length;
    console.log(str_length);
}
// #endregion 类型断言 Code Module End
// -----------------------------------------分隔符--------------------------------------------
