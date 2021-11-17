"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /*
        This field is no longer private but protected meaning it can be
        accessed by sub classes but still not outside of the class itself
        */
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
    /*
    private properties are only availabe in the main class, but cannot
    be accessed in sub-classes which inherit from the main class

    This function only works because the employees-field is protected,
    meaning that every sub-class which inherits from the main-class
    can edit the values of fields, but is still not accessible outside
    of the class
    */
    addEmployee(name) {
        if (name == "Ben") {
            return;
        }
        else {
            this.employees.push(name);
        }
    }
}
const it = new ITDepartment("IT", ["Christoph", "Ammo"]);
console.log(it);
const accounting = new AccountingDeparment("ACC", ["Babies first report"]);
console.log(accounting);
accounting.addReport("Babies second report");
accounting.getReports();
/*
Since the class AccountingDepartment inherits from Department AND employees
is protected, not private, we can also use the functions
of it for the sub-class
*/
accounting.addEmployee("Benu");
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map