/*
This logger gets called when the class-definition is reached by JS
You will see this decorator-function even when never instantiating
an object with the class
*/

function Logger(target: any, propertyName: string) {
	console.log("PROPERTY DECORATOR");
	console.log(target, propertyName);
}

/*
Decoraters can also be called for getters and setters
*/

function Logger2(
	target: any,
	propertyName: string,
	description: PropertyDescriptor
) {
	console.log("ACCESSOR DECORATOR");
	console.log(target);
	console.log(propertyName);
	console.log(description);
}

/*
Decoraters can also be called for functions
*/

function Logger3(
	target: any,
	name: string | Symbol,
	description: PropertyDescriptor
) {
	console.log("FUNCTION DECORATOR");
	console.log(target);
	console.log(name);
	console.log(description);
}

/*
Decoraters can also be called for parameters
*/

function Logger4(target: any, name: string | Symbol, position: number) {
	console.log("PARAMETER DECORATOR");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Logger
	title: string;
	private _price: number;

	@Logger2
	set price(value: number) {
		if (value > 0) {
			this._price = value;
		} else {
			throw new Error("Invalid Price - Must be greater than 0");
		}
	}

	constructor(title: string, price: number) {
		this.title = title;
		this._price = price;
	}

	@Logger3
	getPriceWithTax(@Logger4 tax: number) {
		return this._price * (1 + tax);
	}
}
