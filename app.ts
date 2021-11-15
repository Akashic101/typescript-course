/*
This will strictly define the type of an object
It is better to not do this and let TS figure it out
for itself
*/

const person1: {
	name: string;
	age: number;
} = {
	name: "David",
	age: 23,
};

// This is how you should write it instead

const person2 = {
	name: "David",
	age: 23,
};

console.log(person1.name);
