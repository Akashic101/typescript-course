function WithTemplate(template: string, hookId: string) {
	return function (constructor: any) {
		const hookEl = document.getElementById(hookId);
		const person = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector("h1")!.textContent = person.name;
		}
	};
}

/*
When adding multiple decorators the most bottom one will run first.
*/

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
	name = "David";

	constructor() {
		console.log("Creating new user...");
	}
}

const person = new Person();
