/*
A generic is a very broad type of data/object that can be made more
specific so TS catches errors during compilation
*/

const names: Array<string> = ["David", "Ben"];

names[0].split(" "); //This works since TS knows exactly that the
//Array is of type string

/*
This promise is normally of type <unknown>, but by specifiying the type
TS can be sure that it resolves into a string
*/

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("This is done");
	}, 2000);
});

/*
This will not work since we specified the type of the data. If we would
instead say that the promise is of type Promise<number> it would work

promise.then(data => {
	data++);
});
*/

promise.then(data => {
	data.toLowerCase(); //This works since TS knows the Promise is a string
})
