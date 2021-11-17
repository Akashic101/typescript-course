"use strict";
/*
An interface is for typechecking an object. It gives you a structure
of how an object should look like, what is required and what function
it needs to have.

An interface vs. a custom type is not the same. A interface is more
clearer while a custom type can also hold union-types
*/
/*
Implementing an interface forces the class to adhere to the interface. The class
needs to have the same fields and functions as the interface,
but you can also add your own fields and functions inside the class
on top of that.
You can implement more than one interface (seperated by a comma), not like with classes
*/
class Person {
    constructor(n) {
        this.age = 23;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
/*
This object is of the class Person, but is of type Greetable at the same time
since the class Person implements the interface Greetable
*/
let user1 = new Person("David");
user1.greet("Hello, I'm");
console.log({ user1 });
//# sourceMappingURL=app.js.map