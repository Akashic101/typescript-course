let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "David";

if (typeof userInput === "string") {
	userName = userInput;
}

/*
JS (and TS) allow you to throw an object as an error
This function is of type "never". It always crashes the script
and will never return anything, neither void or undefined

A while (true)-loop will also be of type never
*/

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

// Yes this is a real message/code

generateError(`I'm a teapot`, 418);
