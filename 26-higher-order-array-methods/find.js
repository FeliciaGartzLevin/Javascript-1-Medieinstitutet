/**
 * Higher Order Array Methods
 *
 * .sort() 
 * .filter() <---
 * .find() <---
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */


// // numbers
// const numbers = [ 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

// const largeNumbers = numbers.filter(num => num >= 25);
// const firstLargeNumber =  numbers.find(num => num >= 25);

// // console.log("First large number: ", firstLargeNumber);

const students = [
		{
			name: "Johan",
			points: 1337,
		},
		{
			name: "Saman",
			points: 3,
		},
		{
			name: "Alicia",
			points: 42,
		},
		{
			name: "Elliot",
			points: 88,
		},
		{
			name: "Maja",
			points: 35,
		},
	];

	const firstPassedStudent = students.find(student => student.points >=40 );
	
	// // get all students which are godkända (>= 40)
	// const passed = students.filter(student => student.points >= 40);
	// console.log("Students who passed the exam:", passed);
	
	console.log("First student who passed the exam: ", firstPassedStudent);