const btnAdd = document.querySelector('#add')

btnAdd.addEventListener('click', () => {
	console.log("that tickles...");

	const liCount = document.querySelectorAll('li').length;

	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;

	// const newLiEl = document.createElement('li');
	// newLiEl.innerText = "i am new list item";

	// document.querySelector('ul').append(newLiEl);
});

// document.querySelectorAll('li').forEach( liEl => {
// 	liEl.addEventListener('click', (e) => {
// 		console.log('yey someone clicked me', e.target);

// 		e.target.classList.toggle('completed');
// 	});
// });

document.querySelector('ul').addEventListener('click', (e) => {
	console.log('I am Saman, you clicked me', e);

	// e.target.classList.toggle("completed")


	if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");

		// e.stopPropagation();
	}

});


// document.querySelector('body').addEventListener('click', (e) => {
// 	console.log("Someone clicked me or my children.")
// })

document.querySelector('a').addEventListener('click', e => {
	
	e.preventDefault();
	
	alert('You can check out but you can never leave')
});