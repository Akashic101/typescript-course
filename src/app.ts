/*
Interfaces can define the type of a function as well. Here we have
a interface which has two arguments, both of type number, and a return-value
of type number as well

We can then create a new functions of the custom type of the interface
*/

interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => {
	return n1 + n2;
};



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
