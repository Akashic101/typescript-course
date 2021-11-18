/*
The "keyof"-keywords specifies that the U-argument is a key of the object T
This way TS can be sure that the key exists inside the object
*/

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return "Value: " + obj[key];
}

/*
This object has a name- and age-key. We can now extract one by calling the function
TS knows that the key exists and the code will compile. Trying to extract
a key that does not exist would result in an error
*/

const person = {
	name: "David",
	age: 23,
};

console.log(extractAndConvert(person, "name"));
