/**
 * 函数重载，先定义函数重载的签名，然后再实现函数重载，最后你再使用这个函数时，
 * typescript就会进行相关的类型推断
 */
// #region 重载 Code Module
{
    var suits_1 = ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'];
    /* 函数重载的实现 */
    function pickCard(x) {
        if (Array.isArray(x)) {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x === 'number') {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits_1[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [
        { suit: 'diamonds 方块', card: 2 },
        { suit: 'spades 黑桃', card: 10 },
        { suit: 'harts 桃心', card: 4 },
    ];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card：' + pickedCard1.card + ' of ' + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log('card：' + pickedCard2.card + ' of ' + pickedCard2.suit);
}
// #endregion 重载 Code Module End
// -----------------------------------------分隔符--------------------------------------------
