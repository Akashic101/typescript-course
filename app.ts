/*
Defining a custom type (or type alias) allows you to create a combination of types
such as number & string or even a combination of literal types.
*/

type Combineable = number | string;
type ConversationDescriptor = 'as-number' | 'as-text';

function combine(
	input1: Combineable,
	input2: Combineable,
	resultType: ConversationDescriptor
) {
	let result: number | string;
	
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number') {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

    /*
    If you want to force the return-value to be a number you can force its type to a number
    by putting a + infront of it. Keep in mind doing this with a non-numerical value wil
    return NaN (Not a Number)
    */

    // if(resultType === 'as-number') {
    //    return +result;
    // }
    // else {
    //   return result.toString();
    // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedAges);

const combinedNames = combine("Ben", "Robert", "as-text");
console.log(combinedNames);
