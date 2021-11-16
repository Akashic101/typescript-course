function combine(input1, input2, resultType //This is a combined union-type and a literal type.
//With this you can define your own types. Another example
//is "const n1: number = 5". This is a literal type and the
//variable is not of type number but of type 5. 
) {
    var result; //Not defining the type here will throw a warning as discussed in 2.15 (Type inferece)
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
