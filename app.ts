function add(n1: number, n2: number) {
	return n1 + n2;
}
function printResult(num: number) {
	console.log("Result" + num);
}

printResult(add(5, 23));

/*
This variable is designed for a function which has two parameters,
both numbers, and the return-value must also be a number.
This is why there is no error for the function add() but for the
printResult()-function since the description does not fit
*/

let combineValue: (a: number, b: number) => number;

combineValue = add;
// combineValue = printResult;

console.log(combineValue(8, 8));
