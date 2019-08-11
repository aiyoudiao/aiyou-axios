/**
 * 通过箭头函数可以解决this的指向问题
 * 显式的声明 this的指向，可以更友好的进行typescript的类型推断
 */
// #region this的指向 Code Module
{
    var deck = {
        suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return {
                    /* 这里的this指向的是全局的global，并不是deck */
                    suit: this.suits[pickedSuit],
                    card: pickedCard % 13
                };
            };
        }
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
    var deck = {
        suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            /* 通过箭头函数来纠正this指向的问题，箭头函数可以绑定上一级函数的作用域下的this */
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return {
                    suit: _this.suits[pickedSuit],
                    card: pickedCard % 13
                };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var packedCard = cardPicker();
    console.log('card：' + packedCard.card + '  of ' + packedCard.suit);
}
// #endregion 通过箭头函数来纠正 this的指向问题 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 显式的声明 this的指向 Code Module
{
    var deck = {
        suits: ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return {
                    /* 显式的声明this指向之后，typescript就会进行类型推断了，这样就能减少运行时报错的情况发生 */
                    // suit: this.suits.s,
                    suit: _this.suits[pickedSuit],
                    card: pickedCard % 13
                };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var packedCard = cardPicker();
    console.log('card：' + packedCard.card + '  of ' + packedCard.suit);
}
// #endregion 显式的声明 this的指向 Code Module End
// -----------------------------------------分隔符--------------------------------------------
// #region 在第三方库中检查回调函数中的this指向问题 Code Module
{
    var Handler = /** @class */ (function () {
        function Handler() {
            var _this = this;
            // onClickBad(this: Handler, e: Event) {
            /* 可以通过这种方式来指定this的指向 */
            this.onClickBad = function (e) {
                _this.type = e.type;
            };
        }
        return Handler;
    }());
    var h = new Handler();
    var uiElement = {
        addClickListener: function () { }
    };
    uiElement.addClickListener(h.onClickBad);
}
// #endregion 在第三方库中检查回调函数中的this指向问题 Code Module End
// -----------------------------------------分隔符--------------------------------------------
