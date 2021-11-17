"use strict";
class Department {
    /*
    This way of creating a class is much shorter. You do have to write
    the access modifier to it, no matter if public or private, and the
    parameter has to have the same name as the full variable, no shortcuts
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
console.log(accounting); //Department {name: 'Accounting'}
console.log(accounting.name); //Accounting
accounting.describe(); //This department is called Accounting and has the ID ACC
//# sourceMappingURL=app.js.map