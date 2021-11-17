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
	private static instance: AccountingDepartment;

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

	/*
	Marking a constructor as private means that only one of them can exist
	*/

	private constructor(id: string, private reports: string[]) {
		super(id, "ACC");
		this.lastReport = reports[0];
	}

	/*
	With this method you force the program to create a single
	instance of an accountingDepartment. If one already exists it will
	return the exisiting one.
	*/

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		else {
			this.instance = new AccountingDepartment('ACC2', []);
			return this.instance;
		}
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

/*
No matter how often you create an instance of this class it will
always return the same one. Creating one manually is not possible since
the constructor is private and not accessible outside the class
*/

//const accounting = new AccountingDepartment("ACC", []); //will not work since the onstructor is private

/*
Those three instances will be all exactly the same created in the getInstance()-function
*/

const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
const accounting3 = AccountingDepartment.getInstance();

console.log({accounting1}); //Will return
console.log({accounting2}); //the same as
console.log({accounting2}); //the other ones
