/*
If you have a function with a longer body it is recommened
to use this type of writing
*/

const add1 = (a: number, b: number) => {
	return a + b;
};

console.log(add1(3, 6));

/*
If your function is really short you can use this type of writing
which is significantly shorter and easier to read
*/

const add2 = (a: number, b: number) => a + b;

console.log(add2(3, 6));

/*
This is a different version of an arrow-function which can also save a 
lot of time and space
*/

const printOutput: (a: number | string) => void = (output) =>
	console.log(output);

printOutput(add1(2, 6));

const button = document.querySelector("button");

if (button) {
	button.addEventListener("click", (event) => console.log(event));
}
