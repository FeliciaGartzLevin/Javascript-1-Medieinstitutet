/**
 * Workshop: Higher Order Array Methods
 *
 */

// USE ONLY THE NEW ARRAY METHODS (sort/filter/find/map)
// *NOT* `foreach`

// school friends
const friends = [
	{ name: 'John', grade: 2, year: 3, sex: 'M' },
	{ name: 'Sarah', grade: 3, year: 2, sex: 'F' },
	{ name: 'Bob', grade: 3, year: 5, sex: 'M' },
	{ name: 'Johnny', grade: 2, year: 2, sex: 'M' },
	{ name: 'Ethan', grade: 4, year: 1, sex: 'M' },
	{ name: 'Paula', grade: 4, year: 5, sex: 'F' },
	{ name: 'Donald', grade: 5, year: 5, sex: 'M' },
	{ name: 'Jennifer', grade: 3, year: 3, sex: 'F' },
	{ name: 'Courtney', grade: 3, year: 1, sex: 'F' },
	{ name: 'Jane', grade: 4, year: 3, sex: 'F '}
];

// 1. get an array of the names of all friends in year 3
// save in `year3_names` and console.log it

// denna översta raden funkar men ger inte namnen utan hela objekten:
// const year3 = friends.filter( friend => friend.year === 3);
// const year3_names = year3.name;

/* 
const year3_names = friends.map( friend => {
	
	if(friend.year === 3){
		return friend.name;
	}
});
 */

// this works 👇
// const year3 = friends.filter( friend => friend.year === 3); //rätt
// const year3_names = year3.map( friend => {
// 	return `${friend.name}`
// }); //rätt (provade döpa den till year3_names_arr]);
// // const year3_names = [...year3_names_arr];

// chain methods instead
const year3_names = friends
.filter(friend => friend.year === 3)
.map(friend => friend.name);


/* const year3_names = () => {
	friends.filter( friend => friend.year === 3);
	return friend.name;
}; */

// const year3_names = () => {
// 	friends.filter( friend => {
	
// 		if(friend.year === 3){
// 			return friend.name;
// 		}
// 		return friend.name;
// });

// console.log("Names of all friends in year 3: ", year3);

console.log("Names of all friends in year 3: ", year3_names);


// 2. get an array of the names of all male friends in year 5
// save in `year5_male_names` and console.log it

const year5_male_names = friends
.filter(friend => friend.year === 5 && friend.sex === 'M')
.map(friend => friend.name);


console.log("Names of all male friends in year 5: ", year5_male_names);