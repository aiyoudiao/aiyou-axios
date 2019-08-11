// #region 静态属性 Code Module
{
    var Grid_1 = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDistance = point.x - Grid.origin.x;
            var yDistance = point.y - Grid.origin.y;
            return (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) * this.scale);
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid_1(1.0);
    var grid2 = new Grid_1(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 5 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 5 }));
}
// #endregion 静态属性 Code Module End
// -----------------------------------------分隔符--------------------------------------------
