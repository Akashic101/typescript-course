/*
When you want to pull out every element of an array
you can use the spread-operator (...)
*/

const hobbies = ["Sports", "Cookies"];
const activeHobbies = ["Gaming"];

activeHobbies.push(...hobbies);

/*
You can also pull out the values of an object and 
assign it to a new object
*/

const person = {
	name: "David",
	age: 23,
};

const copiedPerson = { ...person };

console.log(copiedPerson);
