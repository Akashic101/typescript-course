/*
If a class has an abstract method it needs to be marked as abstract

Abstract classes cannot be instantiated. It is just a class that others
can inherit from and are forced to have their own version of abstract
methods
*/

abstract class Department {
	/*
	Static fields are also possible, so you can always access them without
	instantiating a new object first
	*/

	static fiscalYear = 2021;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {}

	/*
	This method is abstract, meaning that every other subclass is forced
	to write their own version of this function

	An abstract method does not have a body an needs to have a return-type
	*/

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo() {
		console.log(
			"The department " + this.name + " has " + this.employees.length + " employee(s)"
		);
		console.log(this.employees);
	}

	/*
	This method being static means it can be called without creating a new
	object first. It works like Math for example where you can always call
	Math.pi without having to write "const math = new Math"
	*/

	static createEmployee(name: string) {
		return { name: name };
	}
}

/*
Since this class inherits from the abstract class Department it is forced
to have an own version of the as abstract marked method describe()
*/

class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}

	describe() {
		console.log("This IT-department has the id " + this.id);
	}
}
class AccountingDepartment extends Department {
	private lastReport: string;

	/*
	This getter is able to get a value of a field inside the class
	Checking if that value exists is probably a good idea
	*/

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		} else {
			throw new Error("No report found");
		}
	}

	/*
	This setter does basically the same thing as the addReport()-function.
	Since it has a parameter it overloads the getter which does not have
	a paremeter so both functions can have the same name.
	*/

	set mostRecentReport(value: string) {
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, "ACC");
		this.lastReport = reports[0];
	}

	describe() {
		console.log("This accounting-department has the id " + this.id);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	getReports() {
		console.log(this.reports);
	}

	addEmployee(name: string) {
		if (name == "Ben") {
			return;
		} else {
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

const accounting = new AccountingDepartment("ACC", []);
const it = new ITDepartment("IT", ["Ben", "Frank"]);

/*
Both objects call the same function but each will call their own version
instead of the abstract one provided by the main class
*/

it.describe(); //calls the describe()-function of ITDepartment
accounting.describe(); //calls he describe()-function of the AccountingDepartment
