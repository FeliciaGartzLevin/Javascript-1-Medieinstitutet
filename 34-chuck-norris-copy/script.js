/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const joke = document.querySelector('#joke');

fetch('https://api.chucknorris.io/jokes/random')
    .then( response => {
        
        if(!response.ok) {
            throw new Error("Response was not OK!")
        }

        //output joke?
        return response.json();
    })
    .then(data => {
        console.log("data: ", data)

        joke.innerText = data.value;
    })
    .catch( err => {
        console.log("ERROR: could not fetch joke. Reason: ", err);

        joke.innertext = "ERROR: You don't summon Chuck Norris, Chuck Norris summons you"
    });