/*
Union-types allow you to have a paremeter/variable to have different types
With this you can use a combine function to either add two numbers or
concetanade two strings. 
You need an if-check since TS does not know if the variable is a number or a string
*/

function combine(input1: number | string, input2: number | string) {
	let result;
	if (typeof input1 === "number" && typeof input2 === "number") {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

// Combining two numbers works by going into the if-statement
const combinedAges = combine(30, 26);
console.log(combinedAges);

//Combining two strings works by going into the else-statement
const combinedNames = combine("Ben", "Robert");
console.log(combinedNames)
