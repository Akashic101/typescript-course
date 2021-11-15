/*
The parameters of this function need to two numbers and one boolean
Changing any of the parameneters into a string would
result into an error during compilation
*/

function add(n1: number, n2: number, showResult: boolean) {
	if (showResult) {
		console.log(n1 + n2);
	}
	return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

console.log(`Number 1 is a ${typeof number1} with a value of ${number1}`);
console.log(`Number 2 is a ${typeof number2} with a value of ${number2}`);

/*
If printResult is true the result will be shown in the console
printResult = false will still calculate the result but not show it
*/

const printResult = false;

add(number1, number2, printResult);
