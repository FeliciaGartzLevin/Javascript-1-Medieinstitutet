/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

btnScareMe.addEventListener('click', e => {
    // hide btn
    btnScareMe.classList.add('hide');

    // get a random delay before scaring user
    const delay = getRandomNumber() * 1000;

    console.log(`Starting timer for ${delay} ms before scaring user`);

    // start timer
    setTimeout( () => {
        // this will be executed after 2000ms
        console.log('Scaring user 👻');
        ghostEl.classList.remove('hide'); // show ghost

        console.log('Starting timer for showing button again');

         // timers for everyone
        setTimeout( () => {
            console.log("Showing button again...");
			ghostEl.classList.add('hide');  // hide ghost again
			btnScareMe.classList.remove('hide');  // show button again
        }, 4000);
    }, 2000);
    
   
});



