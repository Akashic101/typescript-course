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
    /*
    This method being static means it can be called without creating a new
    object first. It works like Math for example where you can always call
    Math.pi without having to write "const math = new Math"
    */
    static createEmployee(name) {
        return { name: name };
    }
}
/*
Static fields are also possible, so you can always access them without
instantiating a new object first
*/
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDeparment extends Department {
    constructor(id, reports) {
        super(id, "ACC");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    /*
    This getter is able to get a value of a field inside the class
    Checking if that value exists is probably a good idea
    */
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report found");
        }
    }
    /*
    This setter does basically the same thing as the addReport()-function.
    Since it has a parameter it overloads the getter which does not have
    a paremeter so both functions can have the same name.
    */
    set mostRecentReport(value) {
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name == "Ben") {
            return;
        }
        else {
            this.employees.push(name);
        }
    }
}
/*
A new object gets created but without the need of a new class first.
You can also access the static field of a class without the need of instantiating
one first

Keep in mind that you cannot access static properties in non-static instances
no this. possible, if you want to access it you need to use the class-name
*/
const employee1 = Department.createEmployee("Nicole");
console.log(employee1, Department.fiscalYear);
//# sourceMappingURL=app.js.map