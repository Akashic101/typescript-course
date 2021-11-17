interface Named {
	readonly name: String;
}

/*
You can extend interfaces meaning that one interface is extended from another
and whatever class implements the interface needs to satisfy the requirements of both
interfaces
*/

interface Greetable extends Named {
	greet(phrase: string): void;
}

/*
Implementing an interface forces the class to adhere to the interface. The class
needs to have the same fields and functions as the interface,
but you can also add your own fields and functions inside the class
on top of that.
You can implement more than one interface (seperated by a comma), not like with classes
*/

class Person implements Greetable, Named {
	name: string;
	age = 23;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

/*
This object is of the class Person, but is of type Greetable at the same time
since the class Person implements the interface Greetable
*/

let user1: Greetable = new Person("David");

/*
You don't need to make the name-field in the class Person readonly as well since
this is already implemented by the interface

user1.name = 'Ben'; //This is not possible since the field is readonly
*/

user1.greet("Hello, I'm");
console.log({ user1 });
