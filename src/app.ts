enum ProjectStatus {
	Active,
	Finished,
}

class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public amountOfPeople: number,
		public status: ProjectStatus
	) {}
}

type Listener = (items: Project[]) => void;

class ProjectState {
	private listeners: Listener[] = []; //An Array of functions a class-instance can have
	private projects: Project[] = []; //An Array of projects
	private static instance: ProjectState;

	private constructor() {}

	static getInstance() {
		//Make sure that there can only be a single instance of a ProjectState (Singleton)
		if (this.instance) {
			return this.instance;
		} else {
			this.instance = new ProjectState();
			return this.instance;
		}
	}

	addListener(listenerFunction: Listener) {
		//Adds a function to a listener
		this.listeners.push(listenerFunction);
	}

	addProjects(title: string, description: string, amountOfPeople: number) {
		const newProject = new Project(
			Math.random().toString(),
			title,
			description,
			amountOfPeople,
			ProjectStatus.Active
		);
		this.projects.push(newProject);

		for (const listenerFunction of this.listeners) {
			listenerFunction(this.projects.slice()); //Slice makes sure we supply a copy of the array, not the original
		}
	}
}

const projectState = ProjectState.getInstance(); //Create a global instance of ProjectState

interface Validatable {
	value: string | number;
	requiredProperty?: boolean; //Marking certain values with a ? means that they are optional
	minLength?: number; //and an object which inherits from this interface
	maxLength?: number; //is not required to have them
	min?: number;
	max?: number;
}

/*
With this function we can check if an object of the type Validatable has correct values
It can check if an object even needs to be validated in the first place, if the string is over a minimum length
or under a maxiumum length or if a number is over and/or under a certain value
*/

function validate(validatableInput: Validatable): boolean {
	//The return-type doesn't really need to be written here, but I do it so I do not forget about it
	let isValid = true;
	if (validatableInput.requiredProperty) {
		isValid = isValid && validatableInput.value.toString().trim().length !== 0; //Both properties must be true or false. If one fails, both will
	}
	if (
		validatableInput.minLength != null &&
		typeof validatableInput.value === "string"
	) {
		//!= includes null and undefined, !== does not
		isValid = isValid && validatableInput.value.length > validatableInput.minLength;
	}
	if (
		validatableInput.maxLength != null &&
		typeof validatableInput.value === "string"
	) {
		//Checking for null makes sure the value is not 0
		isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
	}
	if (
		validatableInput.min != null &&
		typeof validatableInput.value === "number"
	) {
		//Now we need to check for a number, not a string
		isValid = isValid && validatableInput.value > validatableInput.min;
	}
	if (
		validatableInput.max != null &&
		typeof validatableInput.value === "number"
	) {
		isValid = isValid && validatableInput.value < validatableInput.max;
	}
	return isValid;
}

function Autobind(
	_target: any,
	_methodName: string,
	propertyDescriptor: PropertyDescriptor
) {
	const originalMethod = propertyDescriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFunction = originalMethod.bind(this);
			return boundFunction;
		},
	};
	return adjustedDescriptor;
}

class ProjectList {
	//Most of this code is copied from the ProjectInput-class
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLElement; //This is now not a form but a normal HTMLElement
	assignedProjects: Project[];

	constructor(private type: "active" | "finished") {
		//Every constructed element must be one of those two literal types
		this.templateElement = document.getElementById(
			"project-list"
		)! as HTMLTemplateElement; //The template-element inside the HTML-file
		this.hostElement = document.getElementById("app")! as HTMLDivElement; //The host-div which will display all informations from the template
		this.assignedProjects = [];

		const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
		this.element = importedNode.firstElementChild as HTMLElement; //Saves the next tag (first child) of the template

		// Since this element gets created during runtime it does not have an id. Giving
		// it a id will make sure it gets affected by the css-file

		this.element.id = `${this.type}-projects`; //Either "active" or "finished"

		projectState.addListener((projects: Project[]) => {
			this.assignedProjects = projects;
			this.renderProjects();
		});

		this.attach();
		this.renderContent();
	}

	private renderProjects() {
		const listElelement = document.getElementById(
			`${this.type}-projects-list`
		) as HTMLUListElement;
		for (const projectItem of this.assignedProjects) {
			const listItem = document.createElement("li");
			listItem.textContent = projectItem.title;
			listElelement.appendChild(listItem);
		}
	}

	private renderContent() {
		const listId = `${this.type}-projects-list`; //Creates a name with the type of the ProjectList inside a template string
		this.element.querySelector("ul")!.id = listId; //Selects the unordered list and gives it the id
		this.element.querySelector("h2")!.textContent =
			this.type.toUpperCase() + ` PROJECTS`; //Changes the title of the unordered list
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element); //Define where to attach the element (the form) inside the template
	}
}

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById(
			"project-input"
		)! as HTMLTemplateElement; //The template-element inside the HTML-file
		this.hostElement = document.getElementById("app")! as HTMLDivElement; //The host-div which will display all informations from the template

		const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
		this.element = importedNode.firstElementChild as HTMLFormElement; //Saves the next tag (first child) of the template

		// Since this element gets created during runtime it does not have an id. Giving
		// it a id will make sure it gets affected by the css-file

		this.element.id = "user-input";

		this.titleInputElement = this.element.querySelector(
			"#title"
		)! as HTMLInputElement; //Selects the input-field with the id "title"
		this.descriptionInputElement = this.element.querySelector(
			"#description"
		)! as HTMLInputElement; //Selects the input-field with the id "description"
		this.peopleInputElement = this.element.querySelector(
			"#people"
		)! as HTMLInputElement; //Selects the input-field with the id "people"

		this.configure();
		this.attach(); //this function must be called last
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element); //Define where to attach the element (the form) inside the template
	}

	private gatherUserInput(): [string, string, number] | void {
		//This function either returns a tuple (if-block) or nothing (else-block)
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		const titleValidatable: Validatable = {
			value: enteredTitle,
			requiredProperty: true,
			minLength: 6,
		};

		const descriptionValidatable: Validatable = {
			value: enteredDescription,
			requiredProperty: true,
			minLength: 6,
		};

		const peopleValidatable: Validatable = {
			value: +enteredPeople,
			requiredProperty: true,
			min: 0,
			max: 10,
		};

		if (
			!validate(titleValidatable) ||
			!validate(descriptionValidatable) ||
			!validate(peopleValidatable)
		) {
			//Checks if any element is empty
			alert("Invalid input, please try again");
			return;
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople];
		}
	}

	@Autobind //Thanks to the Autobind-decorator we don't need to call .bind(this) to configure() anymore
	private submitHandler(event: Event) {
		event.preventDefault(); //prevents the default action to happen (HTTP-request)
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			//In case the return-value is undefined
			const [title, description, people] = userInput; //Destructering-assingment: https://stackoverflow.com/questions/3422458/unpacking-array-into-separate-variables-in-javascript
			projectState.addProjects(title, description, people); //Create a new project with the submitted details
			console.log({ title }, { description }, { people });
			this.clearInput();
		}
	}

	private clearInput() {
		//Clears all the input-values
		this.titleInputElement.value = "";
		this.descriptionInputElement.value = "";
		this.peopleInputElement.value = "";
	}

	private configure() {
		this.element.addEventListener("submit", this.submitHandler); //Adds an event-listener (submit) to the class
	}
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active"); //Creating a new list with the literal type "active"
const finishedProjectList = new ProjectList("finished"); //Creating a new list with the literal type "finished"
