/*
Defining a custom type (or alias) allows you to create a combination of types
such as number & string or even a combination of literal types.
*/
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
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
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedAges);
var combinedNames = combine("Ben", "Robert", "as-text");
console.log(combinedNames);
