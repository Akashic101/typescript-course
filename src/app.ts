function Autobind(_target: any, _methodName: string, propertyDescriptor: PropertyDescriptor) {
	const originalMethod = propertyDescriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFunction = originalMethod.bind(this);
			return boundFunction;
		}
	}
	return adjustedDescriptor;
}

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; //The template-element inside the HTML-file
		this.hostElement = document.getElementById('app')! as HTMLDivElement; //The host-div which will display all informations from the template
	
		const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
		this.element = importedNode.firstElementChild as HTMLFormElement; //Saves the next tag (first child) of the template
		
		// Since this element gets created during runtime it does not have an id. Giving
		// it a id will make sure it gets affected by the css-file  
		
		this.element.id = 'user-input'; 
		
		this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement; //Selects the input-field with the id "title"
		this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement; //Selects the input-field with the id "description"
		this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement; //Selects the input-field with the id "people"

		this.configure();
		this.attach(); //this function must be called last
	}

	private attach() {
		this.hostElement.insertAdjacentElement('afterbegin', this.element); //Define where to attach the element (the form) inside the template
	}

	private gatherUserInput(): [string, string, number] | void { //This function either returns a tuple (if-block) or nothing (else-block)
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) { //Checks if any element is empty
			alert('Invalid input, please try again');
			return;
		}
		else {
			return[enteredTitle, enteredDescription, +enteredPeople];
		}
	}

	@Autobind //Thanks to the Autobind-decorator we don't need to call .bind(this) to configure() anymore
	private submitHandler(event: Event) {
		event.preventDefault(); //prevents the default action to happen (HTTP-request)
		const userInput = this.gatherUserInput();
		if(Array.isArray(userInput)) { //In case the return-value is undefined
			const [title, description, people] = userInput; //Destructering-assingment: https://stackoverflow.com/questions/3422458/unpacking-array-into-separate-variables-in-javascript
			console.log({title}, {description}, {people});
			this.clearInput();
		}
		console.log(this.titleInputElement.value); //prints out the value of the titleInputElement
	}

	private clearInput() { //Clears all the input-values
		this.titleInputElement.value = "";
		this.descriptionInputElement.value = "";
		this.peopleInputElement.value = ""
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler); //Adds an event-listener (submit) to the class
	}
}

const projectInput = new ProjectInput();