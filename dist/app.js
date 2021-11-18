"use strict";
/*
This logger gets called when the class-definition is reached by JS
You will see this decorator-function even when never instantiating
an object with the class
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(target, propertyName) {
    console.log("PROPERTY DECORATOR");
    console.log(target, propertyName);
}
/*
Decoraters can also be called for getters and setters
*/
function Logger2(target, propertyName, description) {
    console.log("ACCESSOR DECORATOR");
    console.log(target);
    console.log(propertyName);
    console.log(description);
}
/*
Decoraters can also be called for functions
*/
function Logger3(target, name, description) {
    console.log("FUNCTION DECORATOR");
    console.log(target);
    console.log(name);
    console.log(description);
}
/*
Decoraters can also be called for parameters
*/
function Logger4(target, name, position) {
    console.log("PARAMETER DECORATOR");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Invalid Price - Must be greater than 0");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Logger
], Product.prototype, "title", void 0);
__decorate([
    Logger2
], Product.prototype, "price", null);
__decorate([
    Logger3,
    __param(0, Logger4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map