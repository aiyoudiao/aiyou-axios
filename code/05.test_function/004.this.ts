/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 15:34:45
 * @LastEditTime: 2019-08-09 10:28:07
 * @LastEditors: Please set LastEditors
 */
/**
 * 通过箭头函数可以解决this的指向问题
 * 显式的声明 this的指向，可以更友好的进行typescript的类型推断
 */

// #region this的指向 Code Module

{
	let deck = {
		suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
		cards: Array(52),
		createCardPicker: function() {
			return function() {
				let pickedCard = Math.floor(Math.random() * 52);
				let pickedSuit = Math.floor(pickedCard / 13);

				return {
					/* 这里的this指向的是全局的global，并不是deck */
					suit: this.suits[pickedSuit],
					card: pickedCard % 13,
				};
			};
		},
	};

	/* 由于this指向存在问题，所以下面这段代码不能够正常执行 */
	// let cardPicker = deck.createCardPicker();
	// let packedCard = cardPicker();

	// console.log('card：' + packedCard.card + '  of ' + packedCard.suit);
}

// #endregion this的指向 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 通过箭头函数来纠正 this的指向问题 Code Module

{
	let deck = {
		suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
		cards: Array(52),
		createCardPicker: function() {
			/* 通过箭头函数来纠正this指向的问题，箭头函数可以绑定上一级函数的作用域下的this */
			return () => {
				let pickedCard = Math.floor(Math.random() * 52);
				let pickedSuit = Math.floor(pickedCard / 13);

				return {
					suit: this.suits[pickedSuit],
					card: pickedCard % 13,
				};
			};
		},
	};

	let cardPicker = deck.createCardPicker();
	let packedCard = cardPicker();

	console.log('card：' + packedCard.card + '  of ' + packedCard.suit);
}

// #endregion 通过箭头函数来纠正 this的指向问题 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 显式的声明 this的指向 Code Module
{
	interface Card {
		suit: string;
		card: number;
	}

	interface Deck {
		suits: string[];
		cards: number[];
		createCardPicker(this: Deck): () => Card;
	}

	let deck = {
		suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
		cards: Array(52),
		createCardPicker: function(this: Deck) {
			return () => {
				let pickedCard = Math.floor(Math.random() * 52);
				let pickedSuit = Math.floor(pickedCard / 13);

				return {
					/* 显式的声明this指向之后，typescript就会进行类型推断了，这样就能减少运行时报错的情况发生 */
					// suit: this.suits.s,
					suit: this.suits[pickedSuit],
					card: pickedCard % 13,
				};
			};
		},
	};

	let cardPicker = deck.createCardPicker();
	let packedCard = cardPicker();

	console.log('card：' + packedCard.card + '  of ' + packedCard.suit);
}
// #endregion 显式的声明 this的指向 Code Module End

// -----------------------------------------分隔符--------------------------------------------

// #region 在第三方库中检查回调函数中的this指向问题 Code Module

{
	interface UIElement {
		/* 设置回调函数中的this指向问题 */
		addClickListener(onclick: (this: void, e: Event) => void): void;
	}

	class Handler {
		type: string;

		// onClickBad(this: Handler, e: Event) {
		/* 可以通过这种方式来指定this的指向 */
		onClickBad = (e: Event) => {
			this.type = e.type;
		};
	}

	let h = new Handler();

	let uiElement: UIElement = {
		addClickListener() {},
	};

	uiElement.addClickListener(h.onClickBad);
}

// #endregion 在第三方库中检查回调函数中的this指向问题 Code Module End

// -----------------------------------------分隔符--------------------------------------------
