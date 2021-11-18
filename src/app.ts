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
