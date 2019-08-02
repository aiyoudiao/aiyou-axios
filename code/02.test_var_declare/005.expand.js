// #region 展开运算符 数组展开 Code Module
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var first = [1, 2];
    var last = [4, 5];
    /* 数组展开，按照顺序展开 */
    var arr = [0].concat(first, last);
    console.log(first); // [ 1, 2 ]
    console.log(last); // [ 4, 5 ]
    console.log(arr); // [ 0, 1, 2, 4, 5 ]
}
// #endregion 展开运算符 数组展开 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 展开运算符 对象展开 Code Module
{
    var default_ts = {
        name: 'zs',
        age: 25,
        sex: 'man'
    };
    /* 对象展开比数组展开要复杂一点， 后面的key:value 会覆盖前面的 ，所以需要注意顺序*/
    var result = __assign({}, default_ts, { height: 185, age: 18 });
    console.log(result); // { name: 'zs', age: 18, sex: 'man', height: 185 }
}
// #endregion 展开运算符 对象展开 Code Module End
// -----------------------------------------分隔符--------------------------------------------
