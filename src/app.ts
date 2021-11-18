/*
This functions gets an element by its ID in the HTML-body and saves it in the hookEl-const.
You can then create a new person with the constructor of the class Person.
If hookEl exists we can access its inner HTML-properties and set it to the template which is
"<h1> My Person Object</h1>"
The text of hookEl can then be changed to the name of the person-object which was created earlier
*/

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
