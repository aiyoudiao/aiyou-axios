// #region 静态属性 Code Module
{
	/**
	 *	网格
	 *
	 * @class Grid
	 */
	class Grid {
		/* static 关键字用来修饰静态属性 */
		static origin = { x: 0, y: 0 };

		scale: number;

		constructor(scale: number) {
			this.scale = scale;
		}

		calculateDistanceFromOrigin(point: { x: number; y: number }) {
			let xDistance = point.x - Grid.origin.x;
			let yDistance = point.y - Grid.origin.y;

			return (
				Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) * this.scale
			);
		}
	}

	let grid1 = new Grid(1.0);
	let grid2 = new Grid(5.0);

	console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 5 }));
	console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 5 }));
}

// #endregion 静态属性 Code Module End

// -----------------------------------------分隔符--------------------------------------------
