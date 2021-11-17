"use strict";
/*
Interfaces can define the type of a function as well. Here we have
a interface which has two arguments, both of type number, and a return-value
of type number as well

We can then create a new functions of the custom type of the interface
*/
let add = (n1, n2) => {
    return n1 + n2;
};
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
/*
You don't need to make the name-field in the class Person readonly as well since
this is already implemented by the interface

user1.name = 'Ben'; //This is not possible since the field is readonly
*/
user1.greet("Hello, I'm");
console.log({ user1 });
//# sourceMappingURL=app.js.map