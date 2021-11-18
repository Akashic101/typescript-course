/*
This Descriptor autobinds the this-value not to the target, but to
the object

Target and methodName are not needed and optional and can be marked
with an _ so TS still compiles the code
*/

function Autobind(
	_target: any,
	_methodName: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		//configurable: true, //Those two are optional and just
		//enumerable: false,  //Show what is possible
		get() {
			const boundFunction = originalMethod.bind(this);
			return boundFunction;
		},
	};
	return adjustedDescriptor;
}

class Printer {
	message = "This works";

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const p = new Printer();

const button = document.querySelector("button")!;

/*
This would return undefined without the Decorator. "this" in showMessage() is bound to the
target, in this case the button, not the Printer-object p.
*/

button.addEventListener("click", p.showMessage);

/*
This will work since the bind()-method changed "this" from the button
to the Printer-object
*/

button.addEventListener("click", p.showMessage.bind(p));

interface ValidatorConfig {
	[property: string]: {
		//index-type notation
		[validatableProperty: string]: string[]; //['required', 'positive'] for example
	};
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
	const objectValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objectValidatorConfig) {
		return true;
	} else {
		let isValid = true;
		for (const property in objectValidatorConfig) {
			for (const validator of objectValidatorConfig[property]) {
				switch (validator) {
					case "required":
						isValid = isValid && !!obj[property]; // !! means real true-or-false value
						break;
					case "positive":
						isValid && obj[property] > 0;
						break;
				}
			}
		}
		return isValid;
	}
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const titleElement = document.getElementById("title")! as HTMLInputElement;
	const priceElement = document.getElementById("price")! as HTMLInputElement;

	const title = titleElement.value;
	const price = +priceElement.value;

	const createdCourse = new Course(title, price);

	if (!validate(createdCourse)) {
		alert("Invalid input - Please show again");
		return;
	} else {
		console.log(createdCourse);
	}
});
