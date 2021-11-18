/*
This is a decorator-factory. With this we can call the same
logger each time at different times with a unique message each time
*/

function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

@Logger("LOGGING - CREATING PERSON")
class Person {
	name = "David";

	constructor() {
		console.log("Creating new user...");
	}
}

const person = new Person();
