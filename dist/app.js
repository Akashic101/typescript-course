"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, amountOfPeople, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.amountOfPeople = amountOfPeople;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = []; //An Array of functions a class-instance can have
    }
    addListener(listenerFunction) {
        //Adds a function to a listener
        this.listeners.push(listenerFunction);
    }
}
class ProjectState extends State {
    constructor() {
        super();
        this.projects = []; //An Array of projects
    }
    static getInstance() {
        //Make sure that there can only be a single instance of a ProjectState (Singleton)
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ProjectState();
            return this.instance;
        }
    }
    addProjects(title, description, amountOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, amountOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listenerFunction of this.listeners) {
            listenerFunction(this.projects.slice()); //Slice makes sure we supply a copy of the array, not the original
        }
    }
}
const projectState = ProjectState.getInstance(); //Create a global instance of ProjectState
/*
With this function we can check if an object of the type Validatable has correct values
It can check if an object even needs to be validated in the first place, if the string is over a minimum length
or under a maxiumum length or if a number is over and/or under a certain value
*/
function validate(validatableInput) {
    //The return-type doesn't really need to be written here, but I do it so I do not forget about it
    let isValid = true;
    if (validatableInput.requiredProperty) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0; //Both properties must be true or false. If one fails, both will
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        //!= includes null and undefined, !== does not
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        //Checking for null makes sure the value is not 0
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        //Now we need to check for a number, not a string
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
function Autobind(_target, _methodName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    const adjustedDescriptor = {
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
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        //optional parameters should be last
        this.templateElement = document.getElementById(templateId); //The template-element inside the HTML-file
        this.hostElement = document.getElementById(hostElementId); //The host-div which will display all informations from the template
        const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
        this.element = importedNode.firstElementChild; //Saves the next tag (first child) of the template
        // Since this element gets created during runtime it does not have an id. Giving
        // it a id will make sure it gets affected by the css-file
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", //? means that if the boolean is true then the left side of the : gets called, if not then the right side
        this.element); //Define where to attach the element (the form) inside the template
    }
}
class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.amountOfPeople == 1) {
            return "1 person";
        }
        else {
            return `${this.project.amountOfPeople} persons`;
        }
    }
    dragStartHandler(event) {
        console.log(event);
        console.log("drag start");
    }
    dragEndHandler(event) {
        console.log(event);
        console.log("drag end");
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = `${this.persons} assigned`;
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    Autobind
], ProjectItem.prototype, "dragStartHandler", null);
class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    configure() {
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter((project) => {
                //Goes through an array, if the element returns true it will get stored in the new array relevantProjects
                if (this.type === "active") {
                    return project.status === ProjectStatus.Active;
                }
                else {
                    return project.status === ProjectStatus.Finished;
                }
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`; //Creates a name with the type of the ProjectList inside a template string
        this.element.querySelector("ul").id = listId; //Selects the unordered list and gives it the id
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + ` PROJECTS`; //Changes the title of the unordered list
    }
    renderProjects() {
        const listElelement = document.getElementById(`${this.type}-projects-list`);
        listElelement.textContent = ""; //This clears the list meaning that we do not duplicate every entry if we add more than one project
        for (const projectItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul").id, projectItem);
        }
    }
}
class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = this.element.querySelector("#title"); //Selects the input-field with the id "title"
        this.descriptionInputElement = this.element.querySelector("#description"); //Selects the input-field with the id "description"
        this.peopleInputElement = this.element.querySelector("#people"); //Selects the input-field with the id "people"
        this.configure();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler); //Adds an event-listener (submit) to the class
    }
    renderContent() { }
    gatherUserInput() {
        //This function either returns a tuple (if-block) or nothing (else-block)
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            requiredProperty: true,
            minLength: 6,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            requiredProperty: true,
            minLength: 6,
        };
        const peopleValidatable = {
            value: +enteredPeople,
            requiredProperty: true,
            min: 0,
            max: 10,
        };
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            //Checks if any element is empty
            alert("Invalid input, please try again");
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    submitHandler(event) {
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
    clearInput() {
        //Clears all the input-values
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
}
__decorate([
    Autobind //Thanks to the Autobind-decorator we don't need to call .bind(this) to configure() anymore
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList("active"); //Creating a new list with the literal type "active"
const finishedProjectList = new ProjectList("finished"); //Creating a new list with the literal type "finished"
//# sourceMappingURL=app.js.map