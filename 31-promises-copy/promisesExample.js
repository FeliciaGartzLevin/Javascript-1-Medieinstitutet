/**
 * Async pets
 *
 */

const getJSON = (url) => {

	return new Promise( (resolve, reject) => {
		// Get the data we promised
		const request = new XMLHttpRequest();

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const data = JSON.parse(request.responseText);
					
					resolve(data); //resolve promise and pass along the data

				} else {
					reject(`Could not get data, response status: ${request.status}`); //reject promise and pass along reason
				}
			}
		});

		request.open('GET', url);  // Set request to GET data
		request.send();  // Send the request
	});
}

console.log("Getting data...");

// Get cats 😸
getJSON('data/cats.json')
	.then(cats => {
		console.log("Got cats?", cats);

		//get doggos 🐶
		getJSON('data/dogs.json') 
			.then(dogs => {
			console.log("Got list of dogs", dogs)
			})
				.catch(err => {
				console.log("No doggos found, reason:", err);
			});

		})
	.catch(err => {
			console.log("NO CATS 4 U! Because:" + cats);
	});


/* 

// Asynchronous fetch:

// Get cats 😸
getJSON('data/cats.json', (err, cats) => {
	if(err){
		alert("Could not get list of cats. Error was: " + err);
		return
	}

	console.log("Got list of cats", cats);

	//get doggos 🐶
	getJSON('data/dogs.json', (err, dogs) => {
	
		console.log("Got list of dogs", dogs);
	
		
	});

		//get birds 🦜
		getJSON('data/birds.json', (err, birds) => {
		
			console.log("Got list of birds", birds);
		
			
		});
}); */