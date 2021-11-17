class Department {
	private employees: string[] = [];

	/*
	The readonly property is TS-only
	*/

	constructor(private readonly id: string, public name: string) {
	}

	describe(this: Department) {
		console.log(`This department is called ${this.name} and has the ID ${this.id}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfo() {
		console.log('The department ' + this.name + ' has ' + this.employees.length + ' employees')
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
