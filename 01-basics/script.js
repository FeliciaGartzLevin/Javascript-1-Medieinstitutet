// alert("Hej JavaScript från script.js");


// meddelande i webbläsarens konsol

/* console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!');
console.log('Hello console!'); 

const students = 45;


let msg = "Voff voff voff";

let cat ="mjau";

console.log(msg);

msg = "Moooooo";


console.log('Mjau!'); 
 
console.log('42'); 

console.log(msg);

console.log(cat); 

let firstName = "Felicia";

console.log(firstName);

const lastName = "Gartz Levin";



let fullName = firstName + lastName;

firstName = "Pelle";

console.log(fullName);

let helloMsg = "Hello " + firstName + " " + lastName;

console.log(helloMsg);

let numberOfStudents = 45;

let mmmm = 3.14;

let thousand = "1,000" 

let studentsLoveJavaScript = true;*/


let myName = "Felicia";

/* console.log('My name is:' + ' ' + myName);

console.log('First char in name is:' + ' ' + myName[0]);
console.log('First char in name is:' + ' ' + myName[1]);

console.log('Name SHOUTED is:' + ' ' + myName.toUpperCase());

console.log('My name is:' + ' ' + myName);

console.log('Name whispered is:' + ' ' + myName.toLowerCase());

console.log('Position of "c":' + ' ' + myName.indexOf('c')); //position 4 (börjar räkna från 0, så 5e bokstaven är position 0 1 2 3 4 )

console.log('Position of "i":' + ' ' + myName.lastIndexOf('i'));  

console.log('Position of "k":' + ' ' + myName.lastIndexOf('k')); 



console.log('Slice of Felicia:' + ' ' + myName.slice(3,6)); 

console.log('Tiny name:' + ' ' + myName.substr(3,5));  

console.log('Does my name contain "e"?' + ' ' + myName.includes('e')); */ 

let email = "johan.nordstrom@elevera.org";

// email = "johan.nordstrom@elevera.co.uk";
// email = "jn@thehiveresistance.com";
email = "johan.nordstrom@mil.gov.edu.com";

console.log('Sista punkten i emailen har position:' + ' ' + email.lastIndexOf('.'));

console.log('Top domain is:' + ' ' + email.slice(email.lastIndexOf('.'))); 
console.log('Top domain is:' + ' ' + email.substring(email.lastIndexOf('.'))); 
console.log('Top domain is:' + ' ' + email.substr(email.lastIndexOf('.'))); 