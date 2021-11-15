function add(n1: number, n2: number, showResult: boolean) {
	if (showResult) {
		console.log(n1 + n2);
	}
	return n1 + n2;
}

/*
TS perfectly knows what type a variable is by its value.
Writing for example "const number1: number = 5;" is redundant
since TS already knows that number1 is a number by the assigned value
*/

const number1 = 5;
const number2 = 2.8;

/*
When declaring a variable but not assigning any value it is considered
best practise to still write the type of it
*/ 

let number3: number; 

console.log(`Number 1 is a ${typeof number1} with a value of ${number1}`);
console.log(`Number 2 is a ${typeof number2} with a value of ${number2}`);

const printResult = false;

add(number1, number2, printResult);
