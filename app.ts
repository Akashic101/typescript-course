const person1 = {
	name: "David",
	age: 23,
	hobbies: ["Motorsports", "Gaming"],
	role: [2, "Frontend-Developer"],
};

/*
TS does not know that the role-array is of a fixed length. Currently
it can be of type number or string which is why the two functions will work
*/

person1.role.push("Gamer");
person1[1] = 10;



const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; //This is a tuple; fixed length, fixed type
} = {
	name: 'David',
	age: 23,
	hobbies: ['Motorsports', 'Gaming'],
	role: [2, 'Frontend-Developer'],
};


//array.push is an exception which TS will not catch

person2.role.push('Gamer'); 

/*
This will not work since the second element must
explicitly be a string
*/

person2.role[1] = 10; 

