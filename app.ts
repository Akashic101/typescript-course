type Admin = {
	name: string;
	privilige: string[];
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
	privilige: ["create_server"],
	startDate: new Date(),
};

/*
In case of a union-type it will make the new type the one
both have in common, or if multiple it will create a union-type
*/

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
