"use strict";
/*
Now we specified that T and U must be an object. Just passing in a number
which would compile and run but would not be merged into the new object is
now not possible anymore
*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "David", hobbies: "Gaming" }, { age: 23 });
/*
This wouold fail silently if "extends Object" would not be specified.
TS will compile and the code will run but 23 will not be merged into the object

const mergedObj = merge({ name: "David", hobbies: "Gaming" }, 23);

console.log(mergedObj);
*/
//# sourceMappingURL=app.js.map