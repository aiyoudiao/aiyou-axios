var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
function test(person) {
    return "sayhi " + person.name + ", you " + person.age + "?";
}
var user = new User('jwl', 21);
console.log(test(user));
