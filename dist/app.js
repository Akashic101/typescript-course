"use strict";
/*
This is a decorator-function (only available with ES6 as a target)
It needs an argument
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
/*
You call a decorator by putting it infront of a class for example
with an @-symbol
*/
let Person = class Person {
    constructor() {
        this.name = 'David';
        console.log('Creating new user...');
    }
};
Person = __decorate([
    Logger
], Person);
const person = new Person();
//# sourceMappingURL=app.js.map