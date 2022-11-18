/**
 * Guess the number
 *
 * STEG 1
 * Sätt ett tal i en variabel.
 * Be användaren att gissa talet med hjälp av `prompt()`.
 * Om användarens gissning är fel, fråga efter en ny gissning.
 * Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

// Nu ska vi göra ett flödesdiagram över hur koden ska fungera.

// let randomNumber = Math.ceil(Math.random() * 10)

// console.log(randomNumber)

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 10)
}

let randomNumber = getRandomNumber();

const getGuess = () => prompt("Please guess a number between 1-10:");

let guess = getGuess();


console.log("Your guess is:", guess);

if(guess == randomNumber){ //strikt jämförelse (===) går ej eftersom guess och number inte är samma sort (de är string + number)
    alert('Grattis! Du gissade rätt!')
}else if (guess == 0){
    //avsluta program. gör en break?
}else if(guess > randomNumber){
    console.log('Your guess is too high. Try again.')
    // måste kalla på en gissningsfunktion här så att programmet inte bara slutar
    getGuess();
}else if(guess < randomNumber){
    console.log('Your guess is too low. Try again.')
    // måste kalla på en gissningsfunktion här så att programmet inte bara slutar
    getGuess();
}else{
    console.log('Something went wrong. Write a number between 1-10. Try again.')
}




// Nu ska vigöra ett flödesdiargram över hur koden ska fungera.

// if gissning === slumptal - visa alert grattis
// if else gissning !== slumptal - promt ny gissning
// if gissning > slumptal - alert: gissningen är för hög
// if gissning < slumptal - alert: gissningen är för låg
