interface Person {
	name: String;
	age: Number;
}

function test(person: Person) {
	return `sayhi ${person.name}, you ${person.age}?`;
}

let user = { name: 'jwl', age: 21 };

console.log(test(user));
