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
const it = new ITDepartment("IT", ["Christoph", "Ammo"]);
console.log(it);
const accounting = new AccountingDeparment("ACC", []);
console.log(accounting);
/*
Without calling the addReport()-function first this will throw an error
that was created inside the getter

console.log(accounting.mostRecentReport);
*/
accounting.addReport("Babies first report");
accounting.getReports();
accounting.mostRecentReport = "This is a added report with the setter";
accounting.getReports();
//# sourceMappingURL=app.js.map