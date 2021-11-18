/*
When just saying that all parameters are of type object TS
does not know what those objects can be like and what values they hold

Specifying them means TS knows that we will get different types of data
and that the return-object is an intersection of both of them instead of
any unspecific object
*/

function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: "David", hobbies: "Gaming" }, { age: 23 });

/*
Here the function is even more specific. We tell the function that the arguments are of an exact type instead of just an object
While this is redundant it shows that TS already knows the types, you don't have to specify them
*/

const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
	{ name: "David", hobbies: ["Gaming"] },
	{ age: 23 }
);

console.log(mergedObj1);
