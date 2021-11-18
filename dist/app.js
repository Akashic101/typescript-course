"use strict";
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
    submitHandler(event) {
        event.preventDefault(); //prevents the default action to happen (HTTP-request)
        console.log(this.titleInputElement.value); //prints out the value of the titleInputElement
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this)); //Adds an event-listener (submit) to the class and binds it to itself, not the button
    }
}
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map