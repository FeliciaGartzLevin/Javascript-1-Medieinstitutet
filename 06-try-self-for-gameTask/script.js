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

let exitGame=false;
let highscore=null;

while(!exitGame){
    let randomNumber = getRandomNumber();
    let playGame=true;
    let tries = 0;

    while(playGame){
        let guess =  Number(prompt('Guess a number between 1-10'));
        
        if (guess === randomNumber){
            tries ++;

            //if we have highscore:
            if(highscore){
                //new highscore?
                if (tries < highscore){
                    console.log(`YAY NEW HIGHSCORE!`)
                    highscore = tries;
                } else {
                    console.log(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
                }
            } else {
                highscore = tries;
            }

            console.log(`Congratulations! You won the game after ${tries} tries!`);
            alert(`Congratulations! You won the game after ${tries} tries!`);

            playGame = false;

        } else if (guess === 0){
            console.log(`Y U QUIT AFTER ONLY ${tries} TRIES?!`);
            playGame=false;
            exitGame=true;
        
        } else if (guess > randomNumber){
            console.log('Your guess is too high');
            tries ++;

        } else if (guess < randomNumber){
            console.log('Your guess is too low');
            tries ++;
        
        } else {
            console.log('Something went wrong. Write a number between 1-10');
        }
    

    }
}