// let randomNumber = Math.ceil(Math.random() * 10)

// console.log(randomNumber)


const getRandomNumber = (max = 10) => {
    return Math.ceil(Math.random() * max)
}

let numberToGuess = getRandomNumber(10);
let bigNumberToGuess = getRandomNumber(50);

let answer = prompt("Please enter something");
console.log("Your answer was:", answer);



// Nu ska vigöra ett flödesdiargram över hur koden ska fungera.

if gissning === slumptal - visa alert grattis
if else gissning !== slumptal - promt ny gissning
if gissning > slumptal - alert: gissningen är för hög
if gissning < slumptal - alert: gissningen är för låg