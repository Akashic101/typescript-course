import _ from "lodash"; //lodash is build with vanilla JS for vanilla JS, not for TS. You need to install @types/lodash to make it work in ts

console.log(_.shuffle([0, 1, 2, 3]));

/*
Normally TS does not know if a variable exists in another script. Declaring it
makes sure that TS knows that it does exist and is now able to work with it
*/

declare var GLOBAL: any;

console.log(GLOBAL);
