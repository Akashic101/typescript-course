/*
Array destructering works by pulling out each element of an array from left-to-right
and storing it in a variable assigned on the left side of the equal-sign

You can also use the spread-operator to store the rest of the elements which have
not been assigned in a new array. The original array will not be changed
*/

const hobbies: string[] = ["gaming", "motorsports", "biking", "reading"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log({hobby1});
console.log({remainingHobbies});

/*
This way of destructering also works on objects
*/

const person = {
	firstName: "David",
	age: 23,
};

/*
This is not Type infering but an alias. The variable is not of type userName
but saved as userName
*/

const { firstName: userName, age } = person;

console.log({userName});
console.log({age});

/*
Writing a variable in curly-brackets like {this} gives out not only the value
of the variable but also the name for easier identifying. Isn't that neat?
*/
