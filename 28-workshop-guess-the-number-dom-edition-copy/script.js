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
 * STEG 1.2 ✅
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2 ✅
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3 ✅
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4✅
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const btnGetLucky = formGuessEl.querySelector('button[type=submit]')
const inputGuessEl = document.querySelector('#inputGuess');
const turnoutEl = document.querySelector('#turnout');
const winCatPopup = document.querySelector('.wincat-wrapper');
const numberofGuesses = document.querySelector('#numberOfGuesses');
const restartBtn = document.querySelector('#restartBtn');

// Get a random number between 1-10
const getRandomNumber = function(max = 10) {
	return Math.ceil( Math.random() * max );
}

//Funktion behövs ej eg men ville testa det :)
const tellNumberOfGuesses = nbrOfGuesses => {
	numberofGuesses.innerHTML = `You guessed ${nbrOfGuesses} times`;
}


let correctNumber = getRandomNumber();
let guesses = 0;
let continueGame = true;
// visar det rätta numret
// cheatEl.innerHTML = `${correctNumber}`
restartBtn.addEventListener('click', () => {
	location.reload();
});
formGuessEl.addEventListener('submit', (e) => {
	e.preventDefault();
	guesses++;
	tellNumberOfGuesses(guesses);
	// fångar upp gissningen från formen i en variabel 
	// (och säkerställer att det är en siffra)
	const currentGuess = Number(inputGuessEl.value);
	// alert (`Your guess is: ${currentGuess}`);
	
		if(currentGuess===correctNumber){
					// console.log('You guessed the right number');
			turnoutEl.innerHTML = `Number ${currentGuess} is right 🥳`;
			winCatPopup.style.display = 'block';
			
			winCatPopup.addEventListener('click'/*  || 'keypress' */, (e) => {
			
				winCatPopup.style.display = 'none';
			});
			//stop user from making more guesses as the guess var correct
			btnGetLucky.setAttribute('disabled', 'disabled');

		} else if (currentGuess > correctNumber) {
			// Guess was too high
			// console.log("Guess was too high");
			turnoutEl.innerHTML = `Number ${currentGuess} is too high ⬆`;
		} else { /* (currentGuess < correctNumber)  */ 
			// Guess was too low
			// console.log("Guess was too low");
			turnoutEl.innerHTML = `Number ${currentGuess} is too low ⬇`;
		} //else { 
		// behövs ej eftersom vi inte kan få ngt annat än ett nummer
		// man klarar oss med en else ovan
		// 	// Guess was not valid
		// 	// console.log("That's not a number");
		// 	turnoutEl.innerHTML = `That's not a number`;
		// }
	// formGuessEl.reset(); // funkar ej tsm med nedan reset-kod så kan göra som direkt nedan ist
	inputGuessEl.value = "";
	inputGuessEl.value.focus();
});

// annars:
formGuessEl.addEventListener('reset', () => {
	correctNumber=getRandomNumber();
	guesses = 0;
	cheatEl.innerHTML = correctNumber;

	guesses.innerHTML = tellNumberOfGuesses(guesses);

	// empty previous result
	turnoutEl.innerHTML = "";

	// enable submit-btn again
	btnGetLucky.removeAttribute('disabled', '');

	inputGuessEl.value.focus(); //funkar ej
	
});



