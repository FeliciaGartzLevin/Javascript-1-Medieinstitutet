/**
 * Higher Order Array Methods
 *
 * .sort() 
 * .filter() 
 * .find()
 * .map() 
 * .reduce()
 *
 * - Clone an array 
 * - Shuffle an array <---
 */

// numbers
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// poor deveopers array shuffling
// const shuffleArray = numbers.sort( () => {
// 	return 0.5 - Math.random();
// });
	
//Fisher-Yates algorithm
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}