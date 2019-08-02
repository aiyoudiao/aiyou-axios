// #region 混合类型 Code Module
{
  function getCounter () {
    var counter = function (start) {};
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }
  var c = getCounter ();
  c (10);
  c.reset ();
  c.interval = 999.0;
}
// #endregion 混合类型 Code Module End
// -----------------------------------------分隔符--------------------------------------------
