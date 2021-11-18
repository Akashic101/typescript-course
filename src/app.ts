interface CourseGoal {
	title: string;
	description: string;
	completeUntit: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	/*
	Making this object Partial means that every variable is temporarily optional at this point.
	We can only return it though as a courseGoal at the end when everything is complete
	so we have to typecast it. This can be done so we can for example check step-by-step
	if all the informations are correct, the title and description being over a certain
	length or the goal completeUnit-date being in the future
	*/

	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntit = date;
	return courseGoal as CourseGoal;
}

/*
Readonly is also a Utility type
This array is readonly meaning we cannot push or pop anything to it
*/

const names: Readonly<string[]> = ["David", "Ben"];
