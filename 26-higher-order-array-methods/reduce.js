/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

/**
 * Numbers
 */
/*  const simple_numbers = [3, 7, 13, 19];

//  old way to count the sum of all numbers or whatever in an array
let sum = 0;
simple_numbers.forEach( num => {
    sum += num;
});
// console.log('The sum of all the numbers is: ', sum);

// --------


// new way (reduce)
// sum = totalen so far, num = aktuellt nummer som  funktionen gör ngt med
const total_sum = simple_numbers.reduce( (sum, num) => {
    console.log(`Sum is ${sum} and num is ${num}`);
    return sum + num;
}, 0);
// 0=börjar räkna från noll. sätts inget startvärde börjar den räkna från 0

const total_sum2 = simple_numbers.reduce( (sum, num) => sum + num, 1295);

console.log('The sum of all the numbers is: ', total_sum2);
 */
/* 
 const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
 
 //  prevValue = previous value
//  current = nuvarande värde i loopen

 const numbers_sum = numbers.reduce ((prevValue, current) => prevValue + current, 0);
 
 console.log("Sum of all numbers: ", nu);

 */

 /**
  * Students
  */
 
//  const students = [
//      {
//          name: "Johan",
//          points: 13,
//      },
//      {
//          name: "Peter",
//          points: 3,
//      },
//      {
//          name: "Alicia",
//          points: 42,
//      },
//      {
//          name: "Elliot",
//          points: 88,
//      },
//      {
//          name: "Maja",
//          points: 35,
//      },
//  ];

//  const total_points = students.reduce( (sum, student) => {
//     return sum + student.points;
//  }, 0);
 
//  console.log("The sum of all students: ", total_points)
 

 
//  const products = [
//      {
//          sku: "CORR-BWL",
//          name: "Corrosive bowl",
//          in_stock: 321,
//          price: 0.99,
//      },
//      {
//          sku: "CTN-SPCE",
//          name: "Cotton spice rack",
//          in_stock: 2,
//          price: 149.99,
//      },
//      {
//          sku: "GOOD-COOKIES",
//          name: "Inside-out Oreo cookies",
//          in_stock: 18,
//          price: 2.49,
//      },
//      {
//          sku: "BACK-BREAKER",
//          name: "The uncomfortable broom",
//          in_stock: 1,
//          price: 28.65,
//      },
//  ];

// //  det totala varuvärdet av alla produkter, obs hur många av varje det finns!

// const total_value = products.reduce( (sum, product) => {
//     return sum + (product.price*product.in_stock);
// }, 0);

// console.log(total_value)

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

const avg_grade_all = friends.reduce( (sum, friend) => {
    return (sum + (friend.grade));
}, 0)/friends.length;

console.log('Average grade for all friends: ', avg_grade_all);


// friend.sex.trim() kan användas för att få bort whitespacet 
// från Jane och kunna räkna med hennes poäng
const girls = friends.filter( friend => friend.sex === 'F' )

console.log('Girls are: ', girls)

const avg_grade_girls = girls.reduce( (sum, friend) => {
        return (sum + (friend.grade))
    }, 0)/girls.length;

    console.log('Average grade for all girls: ', avg_grade_girls);