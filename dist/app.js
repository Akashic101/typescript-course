"use strict";
/*
This functions gets an element by its ID in the HTML-body and saves it in the hookEl-const.
You can then create a new person with the constructor of the class Person.
If hookEl exists we can access its inner HTML-properties and set it to the template which is
"<h1> My Person Object</h1>"
The text of hookEl can then be changed to the name of the person-object which was created earlier
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const person = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = person.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "David";
        console.log("Creating new user...");
    }
};
Person = __decorate([
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const person = new Person();
//# sourceMappingURL=app.js.map