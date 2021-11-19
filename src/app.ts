enum ProjectStatus { //An Enum which describes the status a project can have
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

type Listener<T> = (items: T[]) => void;

class State<T> {
	protected listeners: Listener<T>[] = []; //An Array of functions a class-instance can have

	addListener(listenerFunction: Listener<T>) {
		//Adds a function to a listener
		this.listeners.push(listenerFunction);
	}
}

class ProjectState extends State<Project> {
	private projects: Project[] = []; //An Array of projects
	private static instance: ProjectState;

	private constructor() {
		super();
	}

	static getInstance() {
		//Make sure that there can only be a single instance of a ProjectState (Singleton)
		if (this.instance) {
			return this.instance;
		} else {
			this.instance = new ProjectState();
			return this.instance;
		}
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

/*
Abstract classes cannot be instantiated. It is just a class that others
can inherit from and are forced to have their own version of abstract
methods
*/

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
	//This class is now generic
	templateElement: HTMLTemplateElement;
	hostElement: T;
	element: U;

	constructor(
		templateId: string,
		hostElementId: string,
		insertAtStart: boolean,
		newElementId?: string
	) {
		//optional parameters should be last
		this.templateElement = document.getElementById(
			templateId
		)! as HTMLTemplateElement; //The template-element inside the HTML-file
		this.hostElement = document.getElementById(hostElementId)! as T; //The host-div which will display all informations from the template

		const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
		this.element = importedNode.firstElementChild as U; //Saves the next tag (first child) of the template

		// Since this element gets created during runtime it does not have an id. Giving
		// it a id will make sure it gets affected by the css-file

		if (newElementId) {
			this.element.id = newElementId;
		}

		this.attach(insertAtStart);
	}
	private attach(insertAtBeginning: boolean) {
		this.hostElement.insertAdjacentElement(
			insertAtBeginning ? "afterbegin" : "beforeend", //? means that if the boolean is true then the left side of the : gets called, if not then the right side
			this.element
		); //Define where to attach the element (the form) inside the template
	}

	abstract configure(): void; //This means that those functions are forced to be created
	abstract renderContent(): void;
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
	private project: Project;

	get persons() {
		if(this.project.amountOfPeople == 1) {
			return "1 person";
		}
		else {
			return `${this.project.amountOfPeople} persons`
		}
	}

	constructor(hostId: string, project: Project) {
		super("single-project", hostId, false, project.id);
		this.project = project;

		this.configure();
		this.renderContent();
	}
	configure() {}
	renderContent() {
		this.element.querySelector("h2")!.textContent = this.project.title;
		this.element.querySelector(
			"h3"
		)!.textContent = `${this.persons} assigned`;
		this.element.querySelector("p")!.textContent = this.project.description;
	}
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> {
	assignedProjects: Project[];

	constructor(private type: "active" | "finished") {
		super("project-list", "app", false, `${type}-projects`);
		this.assignedProjects = [];

		this.configure();
		this.renderContent();
	}

	configure() {
		projectState.addListener((projects: Project[]) => {
			const relevantProjects = projects.filter((project) => {
				//Goes through an array, if the element returns true it will get stored in the new array relevantProjects
				if (this.type === "active") {
					return project.status === ProjectStatus.Active;
				} else {
					return project.status === ProjectStatus.Finished;
				}
			});
			this.assignedProjects = relevantProjects;
			this.renderProjects();
		});
	}

	renderContent() {
		const listId = `${this.type}-projects-list`; //Creates a name with the type of the ProjectList inside a template string
		this.element.querySelector("ul")!.id = listId; //Selects the unordered list and gives it the id
		this.element.querySelector("h2")!.textContent =
			this.type.toUpperCase() + ` PROJECTS`; //Changes the title of the unordered list
	}

	private renderProjects() {
		const listElelement = document.getElementById(
			`${this.type}-projects-list`
		) as HTMLUListElement;
		listElelement.textContent = ""; //This clears the list meaning that we do not duplicate every entry if we add more than one project
		for (const projectItem of this.assignedProjects) {
			new ProjectItem(this.element.querySelector("ul")!.id, projectItem);
		}
	}
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		super("project-input", "app", true, "user-input");

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
	}

	configure() {
		this.element.addEventListener("submit", this.submitHandler); //Adds an event-listener (submit) to the class
	}

	renderContent() {}

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
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active"); //Creating a new list with the literal type "active"
const finishedProjectList = new ProjectList("finished"); //Creating a new list with the literal type "finished"
