/**
 * XMLHttpRequest
 *
 */

// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log(3)
// }, 2000);

// console.log(4)
// console.log(5)



// Create a new XML Http Request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    //Check status of request
    // console.log("Request:", request);
    // console.log("Request readystate:", request.readyState);
    // console.log("Request responseText:", request.responseText);

    if(request.readyState === 4) {
        //YAY DONE!
        

        //Was the request sucessful?
        if(request.status === 200){
            //200 OK
            console.log('Great success');

            //take the string in response text and parse it into JavaScript object

            const data = JSON.parse(request.responseText);
            // console.log("Gots me sum data:", data);
            console.table(data);

            data.forEach( user => {
                document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
                console.log(user.name);

            });

        } else {
            console.log('Something went wrong.');
        }
    }

});

//Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

//Send the request
request.send();

// //Done?
// console.log("Request sent!");
// console.log(request);