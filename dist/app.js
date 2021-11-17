"use strict";
class Department {
    /*
    The readonly property is TS-only
    */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`This department is called ${this.name} and has the ID ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log('The department ' + this.name + ' has ' + this.employees.length + ' employees');
        console.log(this.employees);
    }
}
/*
Now you will need two parameters when creating an object, id and name
*/
const accounting = new Department('ACC', 'Accounting');
/*
Cannot assign to 'id' because it is a read-only property.

accounting.id = 'PC3';
*/
console.log(accounting); //Department {name: 'Accounting'}
console.log(accounting.name); //Accounting
/*
You can still read the value of id since the function is inside the
class and the value is only read, not changed
*/
accounting.describe(); //This department is called Accounting and has the ID ACC
//# sourceMappingURL=app.js.map