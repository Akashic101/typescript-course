"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input'); //The template-element inside the HTML-file
        this.hostElement = document.getElementById('app'); //The host-div which will display all informations from the template
        const importedNode = document.importNode(this.templateElement.content, true); //Imports the content of the template with all nested elements
        this.element = importedNode.firstElementChild; //Saves the next tag (first child) of the template
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element); //Define where to attach the element (the form) inside the template
    }
}
const projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map