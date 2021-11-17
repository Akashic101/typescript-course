/*
You can mark a parameter as optional by putting a ? behind the name
This also works with functions: myMethod?() {...}
*/

interface Named {
	readonly name?: string; //Both are optional
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string; //This is now optional as well
	age = 23;

	constructor(n?: string) {
		if (n) {
			this.name = n;
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + " " + this.name);
		} else {
			console.log("hi");
		}
	}
}

let user1: Greetable = new Person("David");
let user2: Greetable = new Person();

user1.greet("Hello, I'm"); //User1 has a name, so it uses the greet-function
user2.greet("What's up, my name is"); //User2 has no name so it will just say "hi"

console.log({ user1 });
console.log({ user2 });
