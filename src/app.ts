/*
Rest Parameters are parameters where you don't know how many
you will need and/or get.

The reduce-function takes all values of an array and reduces it
a single one. "currentResult" is by default 0 and can also be defined
by the number afte the parameters, currentValue is the
current element of the array the function is at at the moment. 
*/
const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};

const addedNumbers = add(5, 1, 6, 7, 3, 5);

console.log(addedNumbers);
