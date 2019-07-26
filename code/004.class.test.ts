class User {
	name: String;
	age: Number;

	constructor(name: String, age: Number) {
		this.name = name;
		this.age = age;
	}
}

interface Person {
	name: String;
	age: Number;
}

function test(person: Person) {
	return `sayhi ${person.name}, you ${person.age}?`;
}

let user = new User('jwl', 21);

console.log(test(user));
