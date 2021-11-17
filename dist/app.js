"use strict";
class Department {
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
        console.log("The department " + this.name + " has " + this.employees.length + " employee(s)");
        console.log(this.employees);
    }
}
/*
"Extends" means that a class inherits the constructor and methods of the class
mentioned. You can only inherit from one class

When inheriting a class you need to call super() which calls the constructor
of the base-class from inside the sub-class

You first need to call super(), then you can work with this

Writing it like this is the long way and for demonstration
*/
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
/*
This is the shorter way of creating a class with the fields
build into the constructor itself. It still gets the ID from the main
Department-class but has its own unique functions no other class has
*/
class AccountingDeparment extends Department {
    constructor(id, reports) {
        super(id, "ACC");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    getReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("IT", ["Christoph", "Ammo"]);
console.log(it);
const accounting = new AccountingDeparment("ACC", ["Babies first report"]);
console.log(accounting);
accounting.addReport("Babies second report");
accounting.getReports();
/*
Since the class AccountingDepartment inherits from Department we can
also use the functions of it for the sub-class
*/
accounting.addEmployee("Frank");
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map