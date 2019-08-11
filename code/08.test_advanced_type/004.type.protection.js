/**
 * 检测两个成员是否存在
 */
// #region 未使用类型保护，比较麻烦 Code Module
{
    function getSamllPet() {
        return null;
    }
    var pet = getSamllPet();
    /* 不能调用两个类型不相同的成员，但是可以进行类型转换(类型断言) 的方式来强制转换成具体的某一个类型*/
    if (pet.swim) {
        pet.swim();
    }
    else if (pet.fly) {
        pet.fly();
    }
}
// #endregion 未使用类型保护，比较麻烦 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 自定义类型保护 Code Module
{
    function getSamllPet() {
        return null;
    }
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    function isBrid(pet) {
        return pet.fly !== undefined;
    }
    var pet = getSamllPet();
    /* 不能调用两个类型不相同的成员，但是可以进行类型转换(类型断言) 的方式来强制转换成具体的某一个类型*/
    if (isFish(pet)) {
        pet.swim();
    }
    else if (isBrid(pet)) {
        pet.fly();
    }
}
// #endregion 自定义类型保护 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region typeof 类型保护 Code Module
{
}
// #endregion typeof 类型保护 Code Module End
// -----------------------------------------分隔符--------------------------------------------
