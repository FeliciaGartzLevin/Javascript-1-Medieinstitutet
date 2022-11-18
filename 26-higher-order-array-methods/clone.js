/**
 * Higher Order Array Methods
 *
 * .sort() 
 * .filter() 
 * .find()
 * .map() 
 * .reduce()
 *
 * - Clone an array <---
 * - Shuffle an array
 */


const names = ['Johan', 'Kalle', 'Kajsa'];
const clone_fail = names; //copies the reference to the array, NOT the contents of the array

/* The long way of doing it
const new_names = [];
names.forEach(name => {
	new_names.push(name);
}); */

// The map and filter ways of doing it
// const new_names = names.filter( () =>{
// 	return true
// });

// const new_names = names.map( name =>{
// 	return name
// });

const new_names = [...names];
console.log(new_names);