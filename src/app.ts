type Admin = {
	name: string;
	privilege: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

/*
You can create new types by merging two others into one, which
is called an intersection type.
When creating an object like this it must have all fields
of both types it got merged from
*/

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "David",
	privilege: ["create_server"],
	startDate: new Date(),
};

/*
In case of a union-type it will make the new type the one
both have in common, or if multiple it will create a union-type
*/

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/*
The if-statement is called a "Type Guard" it will make sure that
functions will work, even when the arguments are of different types
*/

function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		return a.toString() + b.toString();
	} else {
		return +a + +b;
	}
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
	console.log("Name: " + emp.name); //this works since both types have a name-field

	/*
	This needs another type of type-check with the "in"-keywoard.
	It checks if the field you are looking for is in the object you want to check
	and allows you to use it inside the if-statement
	*/

	if ("privilege" in emp) {
		console.log("Privileges: " + emp.privilege);
	}
	if ("startDate" in emp) {
		console.log("startDate: " + emp.startDate);
	}
}

printEmployeeInfo(e1);

class Car {
	drive() {
		console.log("Driving in a car...");
	}
}

class Truck {
	drive() {
		console.log("Driving in a truck...");
	}

	loadCargo(amount: number) {
		console.log("Loading " + amount + " of cargo");
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

/*
This is another type of type-check called "instanceof". It tells you
if an object is an instance of a certain type. "Instanceof" is 
vanilla JS and also available in TS
*/

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

/*
instanceof would not work here since we are working with an interface,
not a type
*/

interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runSpeed: number;
}

type Animal = Bird | Horse;

/*
Here we can check with a switch-statement which type of animal we
are dealing since both interfaces share the same (discriminated) property. Inside the
switch-statement we can then set a local variable to the needed value
*/

function moveAnimals(animal: Animal) {
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runSpeed;
			break;
	}
	console.log("Moving at speed: " + speed);
}

/*
We can also create an object on the fly by writing it in {}
*/

moveAnimals({ type: "bird", flyingSpeed: 10000 });
