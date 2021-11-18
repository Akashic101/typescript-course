"use strict";
/*
This interface makes sure that the argument has a length that
can be measured, like a string or an array
*/
/*
Now the generic type extends the interface, meaning that a boolean
or a number, which don't have a length-property would not work
*/
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} element(s)`;
    }
    return [element, descriptionText];
}
/*
This will count the length of the characters,
in this case 8
*/
console.log(countAndDescribe("Hi there"));
/*
This will count the length of the array,
in this case 2
*/
console.log(countAndDescribe(["And a one", "And a two"]));
//# sourceMappingURL=app.js.map