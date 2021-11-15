/*
This will strictly define the type of an object
It is better to not do this and let TS figure it out
for itself
*/

const person: {
	name: string;
	age: number;
} = {
	name: "David",
	age: 23,
};

console.log(person.name);
