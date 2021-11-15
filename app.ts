/*

This is for section 2.12: https://github.com/Akashic101/typescript-course/commit/dbf020f897745723bd958ae6c3720ebd625d5224

The parameters of this function need to be number
Changing any of the parameneters into a string would
result into an error during compilation
*/
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

console.log(`Number 1 is a ${typeof number1} with a value of ${number1}`);
console.log(`Number 2 is a ${typeof number2} with a value of ${number2}`);

const result = add(number1, number2);
console.log(`${number1} + ${number2} = ${result}`);
