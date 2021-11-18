"use strict";
/*
This Descriptor autobinds the this-value not to the target, but to
the object

Target and methodName are not needed and optional and can be marked
with an _ so TS still compiles the code
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        //configurable: true, //Those two are optional and just
        //enumerable: false,  //Show what is possible
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        },
    };
    return adjustedDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
/*
This would return undefined without the Decorator. "this" in showMessage() is bound to the
target, in this case the button, not the Printer-object p.
*/
button.addEventListener("click", p.showMessage);
/*
This will work since the bind()-method changed "this" from the button
to the Printer-object
*/
button.addEventListener("click", p.showMessage.bind(p));
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }
    else {
        let isValid = true;
        for (const property in objectValidatorConfig) {
            for (const validator of objectValidatorConfig[property]) {
                switch (validator) {
                    case "required":
                        isValid = isValid && !!obj[property]; // !! means real true-or-false value
                        break;
                    case "positive":
                        isValid && obj[property] > 0;
                        break;
                }
            }
        }
        return isValid;
    }
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleElement = document.getElementById("title");
    const priceElement = document.getElementById("price");
    const title = titleElement.value;
    const price = +priceElement.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input - Please show again");
        return;
    }
    else {
        console.log(createdCourse);
    }
});
//# sourceMappingURL=app.js.map