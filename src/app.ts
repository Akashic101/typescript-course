import _ from "lodash"; //lodash is build with vanilla JS for vanilla JS, not for TS. You need to install @types/lodash to make it work in ts

console.log(_.shuffle([0, 1, 2, 3]));
