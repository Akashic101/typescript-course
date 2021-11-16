/*
Parameters of functions can have default values. Those have to be last
in the list, giving for example a but not b a default value will not work.
*/

const add = (a: number, b: number = 1) => a + b;

/*
With default parameters you can also call a function and not list the
parameter(s) with an assigned default value
*/

console.log(add(3));