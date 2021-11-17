/*
In case of a union-type it will make the new type the one
both have in common, or if multiple it will create a union-type
*/

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/*
With this function overloading you can define the
return-type of a function depending on the type
of the arguments. They are written directly above the
name of the function and always include the return-type
*/

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	} else {
		return +a + +b;
	}
}

/*
TS now knows that the result is of a specific since both
arguments are of that type. This way it will return a specific type
instead of a Combinable
*/

const resultNumber = add(1, 5); //returns a number which makes a mathematical operation possible
console.log(Math.pow(resultNumber, 2));

const resultString = add("one", "five"); //returns a string which makes a string-operation possible
console.log(resultString.toUpperCase());

const fetchedUserData = {
	id: "u1",
	name: "David",
	job: {
		title: "CEO",
		description: "One day maybe",
	},
};

/*
The ?-operator is a save way of accessing nested objects where you are
unsure if they exist. Here TS knows for sure that the query exists, but you
couldn't be sure about that when making a database or HTTP-request
*/

console.log(fetchedUserData?.job?.title);