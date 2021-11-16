function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
}
printResult(add(5, 23));
/*
This variable is designed for a function which has two parameters,
both numbers, and the return-value must also be a number.
This is why there is no error for the function add() but for the
printResult()-function since the description does not fit
*/
var combineValue;
combineValue = add;
// combineValue = printResult;
console.log(combineValue(8, 8));
