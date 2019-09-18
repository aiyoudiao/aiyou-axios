/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-08-05 16:55:25
 * @LastEditTime: 2019-08-05 16:55:25
 * @LastEditors: ilovejwl
 */
/**
 * 函数重载，先定义函数重载的签名，然后再实现函数重载，最后你再使用这个函数时，
 * typescript就会进行相关的类型推断
 */

// #region 重载 Code Module
{
  let suits = ['harts 桃心', 'spades 黑桃', 'clubs 梅花', 'diamonds 方块'];

  /* 函数重载定义之后，函数的参数的返回都会改变，这样定义重载之后，就会进行类型检查 */
  function pickCard(x: { suit: string; card: number }[]): number;
  function pickCard(x: number): { suit: string; card: number };

  /* 函数重载的实现 */
  function pickCard(x): any {
    if (Array.isArray(x)) {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    } else if (typeof x === 'number') {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }

  let myDeck = [
    { suit: 'diamonds 方块', card: 2 },
    { suit: 'spades 黑桃', card: 10 },
    { suit: 'harts 桃心', card: 4 }
  ];

  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log('card：' + pickedCard1.card + ' of ' + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  console.log('card：' + pickedCard2.card + ' of ' + pickedCard2.suit);
}
// #endregion 重载 Code Module End
泛型;
// -----------------------------------------分隔符--------------------------------------------
