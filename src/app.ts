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

	private submitHandler(event: Event) {
		event.preventDefault(); //prevents the default action to happen (HTTP-request)
		console.log(this.titleInputElement.value); //prints out the value of the titleInputElement
	}

	private configure() {
		this.element.addEventListener('submit', this.submitHandler.bind(this)); //Adds an event-listener (submit) to the class and binds it to itself, not the button
	}
}

const projectInput = new ProjectInput();