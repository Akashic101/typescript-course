/*
A class is defined by its attributes which are defined by their name and type.
After that follows the constructor with those attributes as a parameter
*/

class Department {
	name: string;

	constructor(n: string) {
		this.name = n;
	}
}

/*
This is how you define a new object of the class Department. You can log
the complete object or just single attributes as well
*/

const accounting = new Department('Accounting');

console.log(accounting);
console.log(accounting.name);