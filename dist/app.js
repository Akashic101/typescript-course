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
//# sourceMappingURL=app.js.map