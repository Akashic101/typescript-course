/*
Type "unknown" different to "any". "Any" disables all checks in TS
while unknown does not do this. "userInput" can be of any type but TS
does not know which one it is, meaning it cannot assign its value to
"userName" since "userInput" could also be a number
*/
var userInput; //changing the type to "any" would resolve the error in L14
var userName;
userInput = 5;
userInput = "David";
//userName = userInput; Type 'unknown' is not assignable to type 'string'
/*
This will work since TS can now be sure that userInput is of type string,
which is why it can assign its value to userName which is of type string.
*/
if (typeof userInput === "string") {
    userName = userInput;
}
