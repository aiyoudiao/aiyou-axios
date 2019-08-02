// #region 接口的可选属性 Code Module

/* 正方形 */
interface Square {
	color: string;
	area: number;
}

/* 正方形的配置 */
/* 对属性加一个`?`，标识这个属性是`可选属性` */
interface SquareConfig {
	color?: string;
	width?: number;
}

/* 根据正方形的配置返回一个正方形 */
function createSquare(config: SquareConfig): Square {
	let new_square = { color: '#ffffff', area: 8000 };

	if (config.color) {
		new_square.color = config.color;
	}

	if (config.width) {
		new_square.area = Math.pow(config.width, 2);
	}

	return new_square;
}

/* 创建一个正方形 */
let my_square = createSquare({
	color: '#000000',
	width: 100,
});

console.log(my_square); // { color: '#000000', area: 10000 }

/* 再创建一个正方形 */
my_square = createSquare({
	color: 'red',
});

console.log(my_square); // { color: 'red', area: 8000 }

// #endregion 接口的可选属性 Code Module End

// -----------------------------------------分隔符--------------------------------------------
