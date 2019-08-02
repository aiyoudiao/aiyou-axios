// #region const 是有let 相同的作用域，不同的是，不允许再改变量的的引用 Code Module
{
    var only_cat = '黑猫警长';
    /* 普通变量重新赋值会报错 */
    // only_cat = '一只耳';
    /* 不能改变的变量指向的引用 */
    var kitty_cat = {
        name: 'smallKitty',
        age: 8
    };
    /* 可以改变对象的成员值 */
    kitty_cat.age = 123;
    kitty_cat.sex = 'man';
    console.log(kitty_cat);
}
// #endregion const 是有let 相同的作用域，不同的是，不允许再改变量的的引用 Code Module End
// -----------------------------------------分隔符--------------------------------------------
