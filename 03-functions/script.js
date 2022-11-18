// function greet() {
// 	// alert("Hello, World!");
// 	console.log("Hello, World!");
// }

// greet();
// greet();
// greet();
// greet();
// greet();


// function greetUser(name = 'anonymous', time = "day"){
  
//     console.log(`Good ${time}, ${name}`);
// }

// greetUser('Johan', 'morning');
// greetUser('Pelle', 'evening');
// greetUser(undefined, 'day');


// const greetUser = function(name = 'anonymous', time = "day"){
  
//     console.log(`Good ${time}, ${name}`);
// }

// // greetUser('Johan', 'morning');
// // greetUser('Pelle', 'evening');
// // greetUser(undefined, 'day');

// console.log(greetUser);

// const calcBoxCircumference = function(width, height) {
// 	const circumference = width * 2 + height * 2;
// 	return circumference;
// }

// const boxCircumference = calcBoxCircumference(20, 40);
// console.log(boxCircumference);

// const boxCircumference2 = calcBoxCircumference(60, 120);
// console.log(boxCircumference);

// const calcCircleArea = (radius) => {
//     return 3.14159 * radius**2
// }

// const nagUser = (txt) => {
// 	alert(txt);
// }

// const log = (txt) => {
//     console.log(txt);
// }

// const makeMoreInteresting = (txt, action) => {
//     let interesting = txt + "!!!!!!!!!!!!!!!!";
//     action(interesting);
// }

// makeMoreInteresting("This is so much fun", log)

let students = ["Johan", "Pelle", "Kajsa", "Maja", "Kajan"];

// for (let i = 0; i < students.length; i++) {
// 	console.log(`Student at index ${i} is: ${students[i]}`);
// }

// -------------------------
students.forEach( (student, i) => {
    console.log(`Student at index ${i} is: ${students[i]}`);
} );

// ^ samma som nedan

students.forEach( function(student, i){
    console.log(`Student at index ${i} is: ${students[i]}`);
} );

// ^ samma som nedan

const showStudentName = function(student, i) {
	console.log(`Student at index ${i} is: ${student}`);
}

students.forEach( showStudentName );
// ----------------------------