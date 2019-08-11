// #region 泛型类 Code Module
{
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    var stringNumberic = new GenericNumber();
    stringNumberic.zeroValue = '';
    stringNumberic.add = function (x, y) {
        return x + y;
    };
    console.log(stringNumberic.add(stringNumberic.zeroValue, 'i love jwl'));
}
// #endregion 泛型类 Code Module End
// -----------------------------------------分隔符--------------------------------------------
