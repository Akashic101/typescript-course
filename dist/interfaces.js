"use strict";
/*
You can mark a parameter as optional by putting a ? behind the name
This also works with functions: myMethod?() {...}
*/
class Person {
    constructor(n) {
        this.age = 23;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("hi");
        }
    }
}
let user1 = new Person("David");
let user2 = new Person();
user1.greet("Hello, I'm"); //User1 has a name, so it uses the greet-function
user2.greet("What's up, my name is"); //User2 has no name so it will just say "hi"
console.log({ user1 });
console.log({ user2 });
//# sourceMappingURL=interfaces.js.map