/*
This function has three parameters. Two numbers that will get added together and a callback.
A callback is a function inside a function with its own parameters and return value
*/

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
	const result = n1 + n2;
	callback(result);
}

/*
Here the function gets called. The result of the function will be saved in the callback
under the name result which then can be used inside the function-call.

This way you can be sure that the return of the callback is of the type defined in the function,
here as an example it is a number
*/

addAndHandle(10, 20, (result) => {
	console.log(result);
});
