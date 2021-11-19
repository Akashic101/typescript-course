"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(_target, _methodName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjustedDescriptor;
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input'); //The template-element inside the HTML-file
        this.hostElement = document.getElementById('app'); //The host-div which will display all informations from the template
        const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
        this.element = importedNode.firstElementChild; //Saves the next tag (first child) of the template
        // Since this element gets created during runtime it does not have an id. Giving
        // it a id will make sure it gets affected by the css-file  
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title'); //Selects the input-field with the id "title"
        this.descriptionInputElement = this.element.querySelector('#description'); //Selects the input-field with the id "description"
        this.peopleInputElement = this.element.querySelector('#people'); //Selects the input-field with the id "people"
        this.configure();
        this.attach(); //this function must be called last
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //Define where to attach the element (the form) inside the template
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) { //Checks if any element is empty
            alert('Invalid input, please try again');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    submitHandler(event) {
        event.preventDefault(); //prevents the default action to happen (HTTP-request)
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) { //In case the return-value is undefined
            const [title, description, people] = userInput; //Destructering-assingment: https://stackoverflow.com/questions/3422458/unpacking-array-into-separate-variables-in-javascript
            console.log({ title }, { description }, { people });
            this.clearInput();
        }
        console.log(this.titleInputElement.value); //prints out the value of the titleInputElement
    }
    clearInput() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler); //Adds an event-listener (submit) to the class
    }
}
__decorate([
    Autobind //Thanks to the Autobind-decorator we don't need to call .bind(this) to configure() anymore
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map