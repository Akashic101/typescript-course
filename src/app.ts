/*
You can mark a property as private meaning only functions inside
the class can access it

This also works on functions/methods
*/

class Department {
	name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}

	/*
	The this-keywoard will always check for the value of the
	object it has been called on

	Adding a 'parameter' here will force any object to have a
	name-value when calling the describe()-function
	*/

	describe(this: Department) {
		console.log("This department is called " + this.name);
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
Now this code would not work since the object does have a name-parameter, but
no employees-array


const accountingCopy2 = { name: "HR", describe: accounting.describe };

accountingCopy2.describe(); //This department is called HR
*/

accounting.addEmployee('Ben');
accounting.addEmployee('Robert');

accounting.printEmployeeInfo();

/*
Accessing and modifiying an object like this when functions
like addEmployee() exist should not be allowed

Since the employees-value is private it cannot be accessed by a 
function outside the Department-class
*/

//accounting.employees[2] = 'Thea';

/*
This will work since the name-value is public (by default)
*/
accounting.name = 'stupid department';