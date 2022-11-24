/**
 * Promises 101
 *
 */

let teacherIsNice = false;

const willWeGetTheAnswersToTheExam = () => {
    return new Promise( (resolve, reject) => {
        // do something that takes some time to do
        // and when done, either resolve or reject promise
        // resolve(); or
        // reject(); below
        setTimeout( () => {
           if(teacherIsNice) {
            // resolve promise
            const data = [42, 1337, 1, 13];
            resolve(data);
           } else {
                // reject promise
                reject("YOU NO ANSWERS GET");
           }
        }, 2000);
    });
}

// const teachersPromise = willWeGetTheAnswersToTheExam();
// teachersPromise
willWeGetTheAnswersToTheExam() //ovan kodsnutt skrivs kort såhär
.then( (data) => { //om löftet blir uppfyllt
    console.log("YAY teacher is nice!", data);
    alert("🥳 Promise has been fulfilled! YAY!");
})
.catch( (err) => { //om löftet blir
    console.log("BAD TEACHER 😣", err);
    alert("😡 You always make promises but never keep them");
});

console.log("Promise started")