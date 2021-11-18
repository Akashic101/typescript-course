/*
This logger gets called when the class-definition is reached by JS
You will see this decorator-function even when never instantiating
an object with the class
*/

function Logger(target: any, propertyName: string) {
	console.log("PROPERTY DECORATOR");
	console.log(target, propertyName);
}

class Product {
	@Logger
	title: string;
	private _price: number;

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

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}
