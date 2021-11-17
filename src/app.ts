/*
An interface is for typechecking an object. It gives you a structure
of how an object should look like, what is required and what function
it needs to have.
*/

interface Person {
	name: String;
	age: number;

	/*
    Functions need to have a return-value assigned
    */

	greet(phrase: string): void;
}

let user1: Person;

user1 = {
	name: "David",
	age: 23,
	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	},
};

user1.greet("Hello, I'm");
