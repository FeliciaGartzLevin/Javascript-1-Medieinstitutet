/**
 * Workshop: Password Checker with functions
 *
 * STEG 1 ✅
 * Istället för att vi har lösenordet hårdkodat (dvs vi testar samma lösenord
 * alltid), fråga användaren efter ett lösenord och berätta därefter om det
 * är ett säkert lösenord eller ej. 
 *
 * STEG 2
 * Lägg koden för att hitta antalet specialtecken i en egen funktion som tar
 * emot lösenordet att kontrollera som en parameter, och returnerar antalet
 * specialtecken som hittades i det mottagna lösenordet.
 *
 * Byt ut specialCharCount i if-satserna till att kalla på din nya funktion
 * och kolla att allt fortfarande fungerar.
 *
 * STEG 3
 * Berätta för användaren om lösenordet var säkert eller ej med hjälp av
 * `alert` istället för `console.log`
 *
 *
 * GAMMAL KRAVSPECIFIKATION
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

 const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

let password = prompt(`Choose a password meeting any of the following requirements:  
* - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
* - minst 8 tecken varav minst ett specialtecken enligt nedan
* - eller har minst 12 tecken och minst 1 bindestreck
* - eller har minst 16 tecken`);

// password = "password"; // inte giltigt
// password = "p@$swo"; // giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

// Gunnars lösning:
// Jag skapade en ny function som tar emot en string. Börjar med att skapa en boolean secure som börjar på false. 
// Kollar om password.length >= 16 eller password.length >= 12 && password.includes('-'). 
// Om något av dem stämmer blir secure = true.
// Om inte, kallar jag på en annan ny function som tar också emot en password string, 
// som då loopar över specialChars och räknar upp varje gång password.includes(char eller specialChars[i]). 
// Returnerar specialCharCount och sätter det i en variabel i första functionen. 
// Kollar då om length >= 8 && specialCharCount >= 1 eller length >= 6 && specialCharCount >= 2. 
// Om något av dem stämmer blir secure = true.
// Då i slutet av functionen så gör jag en alert med en template string. 
// I den lägger jag till "not" i "Password is (not) secure" med en trinary operator.
// Sist så gjorde jag passCheck(prompt('Input a password')) för att anropa functionen.


/* let count = 0;

specialChars.forEach(element => {
  if (element === specialChars[count]) {
    count += 1;
  }
}); */



//  for(let i = 0; i < specialChars.length; i++){

//     if (password.includes(specialChars[i]) === (specialChars[i])) {
//         let numberOfTimes = i;
// }
// }

// let passwordContainsSpecChar = () => {
//     return password.includes(specialChars[i])
// }

// original functioning for-loop:
// for(let i = 0; i < specialChars.length; i++){

//     if (password.includes(specialChars[i])){

//          numberOfTimes ++ ;
//     }
// }



const specialCharAmount = (pwd) => {
   let numberOfTimes = 0;

for(let i = 0; i < specialChars.length; i++){

    if (pwd.includes(specialChars[i])){

        numberOfTimes ++ ;
    }
}
return numberOfTimes
}



// specialChars.forEach(function(i){
//     if (password.includes(specialChars[i])){
 
//        return numberOfTimes ++ ;
//     }
//  });



// for(let i = 0; i < specialChars.length; i++){

//     if (password.includes(specialChars[i])){

//         numberOfTimes ++ ;
//     }
// }


// console.log(numberOfTimes);


 if(password.length >= 16){
    alert("Your password is valid.")
    
 } else if(password.length >= 12 && password.includes('-')){
    alert('This password is valid')

 } else if(password.length >= 8 && specialCharAmount(password) >= 1){
   
    alert('This password is valid and strong')

 } else if(password.length >= 6 && specialCharAmount(password) >= 2){
   
    alert('This password is valid and pretty strong')

 } else{
    alert("Choose another password")
 }

