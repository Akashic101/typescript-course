/*
enums are space-efficient and you can also change
the numbers of the elements
by giving them a different identifier (default is 0)

enum Role { ADMIN = 5, READ_ONLY, AUTHOR = 'AUTHOR'};

ADMIN will be 5
READ_ONLY will be 6
AUTHOR will be AUTHOR
*/

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
	name: "David",
	age: 23,
	hobbies: ["Motorsports", "Gaming"],
	role: Role.ADMIN,
};

if(person.role === Role.ADMIN) {
	console.log(`User ${person.name} is ADMIN`)
}
else {
	console.log(`User ${person.name} is not an ADMIN`)
}
