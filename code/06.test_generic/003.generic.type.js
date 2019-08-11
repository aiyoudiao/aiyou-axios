// #region 使用泛型类型 Code Module
{
    function identity(arg) {
        return arg;
    }
    /* 声明泛型方法，只针对当前变量 */
    var myIndentity = identity;
    /* 声明泛型对象，只针对当前变量 */
    var myIndentity2 = identity;
    var myIndentity3 = identity;
    /* 在使用的时候，直接设置number */
    var myIndentity4 = identity;
}
// #endregion 使用泛型类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
