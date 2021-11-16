/*
Adding a ": number" behind the parameters will define the type of
the return-value. Not returning anything will be defined with ": void"
*/
function add(n1, n2) {
    return n1 + n2;
}
/*
This function is a void-example. There is no return-value so
the functions return-value is "void". Use "void" and not "undefined".
"Undefined" means there is an empty return-value. "Void" is used when
there is no return-value at all.
*/
function printResult(num) {
    console.log("Result" + num);
}
printResult(add(5, 23));
