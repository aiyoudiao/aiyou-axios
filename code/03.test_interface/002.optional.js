// #region 接口的可选属性 Code Module

function createSquare (config) {
  var new_square = {color: '#fffff', area: 8000};
  if (config.color) {
    new_square.color = config.color;
  }
  if (config.width) {
    new_square.area = Math.pow (config.width, 2);
  }
  return new_square;
}
var my_square = createSquare ({
  color: '#000000',
  width: 100,
});
console.log (my_square);
my_square = createSquare ({
  color: 'red',
});
console.log (my_square);
// #endregion 接口的可选属性 Code Module End
// -----------------------------------------分隔符--------------------------------------------
