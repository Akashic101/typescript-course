"use strict";
/*
An interface is for typechecking an object. It gives you a structure
of how an object should look like, what is required and what function
it needs to have.
*/
let user1;
user1 = {
    name: "David",
    age: 23,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hello, I'm");
//# sourceMappingURL=app.js.map