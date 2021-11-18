"use strict";
/*
This is a decorator-factory. With this we can call the same
logger each time at different times with a unique message each time
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = "David";
        console.log("Creating new user...");
    }
};
Person = __decorate([
    Logger("LOGGING - CREATING PERSON")
], Person);
const person = new Person();
//# sourceMappingURL=app.js.map