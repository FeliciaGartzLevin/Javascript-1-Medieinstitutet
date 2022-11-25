/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const jokeBtn = document.querySelector('#joke');

const getJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random')

    if(!response.ok) {
        throw new Error("Response was not OK!")
    }

    const joke = await response.json();

    jokeBtn.innerText = joke.value;


        /*  använder ovan rader med async-await, istället för nedan

            .then( response => {
            
            if(!response.ok) {
                throw new Error("Response was not OK!")
            }

            //output joke?
            return response.json();
        })
        .then(joke => {
            console.log("joke: ", joke)

             jokeBtn.innerText = joke.value;
            
        })
        .catch( err => {
            console.log("ERROR: could not fetch joke. Reason: ", err);

            jokeBtn.innertext = "ERROR: You don't summon Chuck Norris, Chuck Norris summons you"
        }); */
}


document.querySelector('#getJokeBtn').addEventListener('click', () => {
	getJoke();
});

//Start off with a joke
getJoke();
