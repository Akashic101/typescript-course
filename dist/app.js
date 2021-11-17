"use strict";
/*
A class is defined by its attributes which are defined by their name and type.
After that follows the constructor with those attributes as a parameter
*/
class Department {
    constructor(n) {
        this.name = n;
    }
    /*
    The this-keywoard will always check for the value of the
    object it has been called on

    Adding a 'parameter' here will force any object to have a
    name-value when calling the describe()-function
    */
    describe() {
        console.log("This department is called " + this.name);
    }
}
/*
This is how you define a new object of the class Department. You can log
the complete object or just single attributes as well
*/
const accounting = new Department("Accounting");
console.log(accounting); //Department {name: 'Accounting'}
console.log(accounting.name); //Accounting
accounting.describe(); //This department is called Accounting
/*
This is the tricky part of the this-keywoard. Here a new object is
created but its describe-property is a pointer to the describe()-function
of the accounting-object. But it does not have a name so the value is undefined
*/
const accountingCopy = { describe: accounting.describe };
/*
accountingCopy.describe();

This will result into an error since the
accountCopy-object has no name-value
*/
/*
Here it will work since the accountingCopy2-object has a name-value
which is needed when calling the describe()-function
*/
const accountingCopy2 = { name: "HR", describe: accounting.describe };
accountingCopy2.describe(); //This department is called HR
//# sourceMappingURL=app.js.map