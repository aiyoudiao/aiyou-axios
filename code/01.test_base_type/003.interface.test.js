function test(person) {
    return "sayhi " + person.name + ", you " + person.age + "\uFF1F";
}
var user = { name: 'jwl', age: 21 };
console.log(test(user));
