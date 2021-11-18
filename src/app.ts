/*
This is a decorator-function (only available with ES6 as a target)
It needs an argument 
*/

function Logger(constructor: Function) {
	console.log('Logging...');
	console.log(constructor);
}

/*
You call a decorator by putting it infront of a class for example
with an @-symbol
*/

@Logger
class Person {
	name = 'David';

	constructor() {
		console.log('Creating new user...');
	}
}

const person = new Person();