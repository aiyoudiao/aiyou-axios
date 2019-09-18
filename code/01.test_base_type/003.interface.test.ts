/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-07-24 10:52:23
 * @LastEditTime: 2019-07-24 10:52:23
 * @LastEditors: ilovejwl
 */
interface Person {
  name: String;
  age: Number;
}

function test(person: Person) {
  return `sayhi ${person.name}, you ${person.age}?`;
}

let user = { name: 'jwl', age: 21 };

console.log(test(user));
