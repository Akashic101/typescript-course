const person = {
	name: "David",
	age: 23,
	hobbies: ["Motorsports", "Gaming"],
};

/*
This defines a variables that needs to be an array
of Strings with at least two elements
*/

let favouriteFood: string[] = ["Pizza", "Noodles"];

/*
If you want an array with different elements i.e. Strings and Numbers
you can define it as a type of "any"
*/

let favouriteNumber: any = ["FortyTwo", 42];

/*
Since person.hobbies is a string-array we can use any method
that can be used on strings on the elements since every single element
of a string-array must be a string as well
*/

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
