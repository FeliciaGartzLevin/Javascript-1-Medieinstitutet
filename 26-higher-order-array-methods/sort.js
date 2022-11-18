/**
 * Higher Order Array Methods
 *
 * .sort() <---
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// names
// const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
// console.log("Names in chaos:", names);

// // sort array alphabetically
// names.sort()

// console.log("Names in order: ", names);

// // reverse
// names.reverse();

// console.log("Names in reversed order: ", names);

// numbers
// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 7, 33, 52 ];

// console.log("Numbers in chaos:", numbers);

// // sort numbers
// numbers.sort()
// console.log("Numbers in proper? order:", numbers);


// sort numbers NUMERICALLY
// numbers.sort( (a, b) => {    // a = 8, b = 4
// return (a - b);

// 	// if a is less than b (i.e. a should be sorted BEFORE b)
// 	if (a < b) {
// 		return -1;
// 	}

// 	// if a is greater than b (i.e., a should be sorted AFTER b)
// 	if (a > b) {
// 		return 1;
// 	}

//     // a must be equal to b
// 	return 0;
// } );
// sort numbers NUMERICALLY with even shorter code
// numbers.sort( (a, b) => a - b);

// console.log("Numbers in order:", numbers);

//We can even sort objects based on a property

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

console.log("students before sort:", students);

students.sort( (a, b) => {
	
    return a.points - b.points;


	// // is a less than b (i.e. a should be sorted BEFORE b)
	// if (a.points < b.points) {
	// 	return -1;
	// }

	// // is a greater than b (i.e. a should be sorted AFTER b)
	// if (a.points > b.points) {
	// 	return 1;
	// }

	// // a is equal to b
	// return 0;
} );

console.log("students after sort:", students);

students.sort( (a, b) =>  a.points - b.points );

console.log("students after sort:", students);
