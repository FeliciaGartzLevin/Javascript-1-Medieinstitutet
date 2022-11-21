/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1✅
 * En input-box där man kan gissa på ett tal. En knapp för att gissa. 
 *
 * STEG 1.1 ✅
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const turnoutEl = document.querySelector('#turnout');

// Get a random number between 1-10
const getRandomNumber = function(max = 10) {
	return Math.ceil( Math.random() * max );
}

let continueGame = false;
let correctNumber = getRandomNumber();
let guesses = 0;

cheatEl.innerHTML = `${correctNumber}`

formGuessEl.addEventListener('submit', (e) => {
	e.preventDefault();

	const currentGuess = Number(inputGuessEl.value);

	alert (`Your guess is: ${currentGuess}`);
	

		if(currentGuess===correctNumber){
			guesses ++;
			
			console.log('You guessed the right number');
		} else if (currentGuess > correctNumber) {
			// Guess was too high
			// Increase number of guesses made
			guesses++;
			console.log("Guess was too high");

		} else if (currentGuess < correctNumber) {
			// Guess was too low
			// Increase number of guesses made
			guesses++;
			console.log("Guess was too low");

		} else {
			// Guess was not valid
			console.log("That's not a number");

		}

	
});



