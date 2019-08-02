var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// #region 数组解构 Code Module
{
    /* 定义一个数组 */
    var data = [1, 2];
    /* 按照顺序解构 */
    var first = data[0], last = data[1];
    /* 类似如下的逐个赋值的操作 */
    // let first = data[0];
    // let last = data[1];
}
// #endregion 数组解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 函数参数解构 Code Module
{
    /* 定义一个存放两个数值的数组 */
    var data = [1, 2];
    /* 定义一个函数 */
    function f(_a) {
        var first = _a[0], last = _a[1];
        // function f([first, last]: [number, number] = [4, 5]) { // 支持赋默认值的操作
        console.log(first);
        console.log(last);
    }
    f(data);
}
// #endregion 函数参数解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 数组的反向解构 Code Module
{
    /* 定义一个数组 存放五个数值 */
    var data = [1, 2, 3, 4, 5];
    /* 通过扩展运算符来实现反向解构 */
    var first = data[0], test_arr = data.slice(1);
    console.log(first); // 1
    console.log(test_arr); // [ 2, 3, 4, 5 ]
}
// #endregion 数组的反向解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 数组的稀疏解构 Code Module
{
    /* 定义一个数组 存放五个数值 */
    var data = [1, 2, 3, 4, 5];
    /* 通过 空位置 `,` 的方式来跳过按照顺序的解构赋值 */
    var three = data[2];
    console.log(three); // 3
}
// #endregion 数组的稀疏解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 对象解构 Code Module
{
    var obj = {
        a: 'foo',
        b: 2,
        c: 'bar'
    };
    /* 对象解构通过 对应的key来进行赋值操作 */
    var a = obj.a, c = obj.c;
    console.log(a, c);
}
// #endregion 对象解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 对象的反向解构 Code Module
{
    var obj = {
        a: 'foo',
        b: 2,
        c: 'bar'
    };
    /* 对象反向解构， 通过扩展运算符来实现 */
    var a = obj.a, test_obj = __rest(obj, ["a"]);
    console.log(a); // 'foo'
    console.log(test_obj); // {b: 2, c: 'bar'}
    console.log(a.length + test_obj.b + test_obj.c.length);
}
// #endregion 对象的反向解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 解构后对变量重命名 Code Module
{
    var obj = {
        a: 'foo',
        b: 2,
        c: 'bar'
    };
    /* 对象解构时，重新定义变量名称 */
    var obj_a = obj.a, obj_b = obj.b, obj_c = obj.c;
    // let {
    // 	a: obj_a,
    // 	b: obj_b,
    // 	c: obj_c,
    // }: { a: string; b: number; c: string } = obj;
    /* 上面的写法等同于下面这种 */
    // let obj_a = obj.a;
    // let obj_b = obj.b;
    // let obj_c = obj.c;
    console.log(obj_a); // 'foo'
    console.log(obj_b); // 2
    console.log(obj_c); // 'bar'
}
// #endregion 解构后对变量重命名 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 函数的参数解构 Code Module
{
    function f1(who_objet) {
        /* 解构赋值，对b设置默认值 */
        var a = who_objet.a, _a = who_objet.b, b = _a === void 0 ? 200 : _a, c = who_objet.c;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
// #endregion 函数的参数解构 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region type语法 声明类型 Code Module
{
    function f2(_a) {
        var a = _a.a, b = _a.b;
        console.log(a);
        console.log(b);
    }
}
// #endregion type语法 声明类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 参数默认值 Code Module
{
    /* 这种参数的解构方式，会自动进行类型推断 */
    function f3(_a) {
        var _b = _a === void 0 ? { a: 4, b: 5 } : _a, _c = _b.a, a = _c === void 0 ? 2 : _c, _d = _b.b, b = _d === void 0 ? 3 : _d;
        console.log(a);
        console.log(b);
    }
    f3(); // 4 5
    f3({ a: 6, b: 7 }); // 6 7
    f3({});
}
// #endregion 参数默认值 Code Module End
// -----------------------------------------分隔符--------------------------------------------
