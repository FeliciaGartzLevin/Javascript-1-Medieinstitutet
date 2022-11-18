/**
 * Todos
 *
 * STEG 1 ✅
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2 ✅
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3 
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');
const newTodo = document.querySelector('#newTodo');


// list of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

// Stoppa in objekt i listan

// STEG 1

todos.forEach( todo => {
	// todosEl.innerHTML="";
	todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
});

// STEG 2
newTodoFormEl.addEventListener('submit', e => {
	// prevent form from being submitted (/page to reload)
	e.preventDefault();

	const newTodoListItem = newTodoFormEl.newTodo.value;

	todos.push(
		{
			title: newTodoListItem,
			completed: false,
		},
	); //pusha in ett nytt objekt i arrayen
	
	// min lösning:
	todosEl.innerHTML += `<li class="list-group-item">${newTodoListItem}</li>`
	// johans lösning:
	// kolla hans git

	newTodoFormEl.reset();
});


// STEG 3

// lyssna efter klick på hela listan
todosEl.addEventListener('click', (e) => {

	// OM tagName är LI, GÖR någonting
	// (annars gör ingenting)
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("completed");

		/* if-sats if (todo.completed=true;){

		} */
		// hur kan jag targeta de specifika objekten när jag klickar? 
		// Nu targetar jag ju en li-tagg 
		// typ: todos.name.newTodoListItem
		// e.target.todos.toggle(!todos.completed);
		// e.target.todos.completed = true;
		// e.target.todos.completed.toggle(true);
		// e.target.this.completed.toggle(true);
		// sista kodsnutten funkar inte. vill göra detta:
		// leta upp todo-objektet och ändra `completed` till `true`. när jag klickar
		// kolla .this eller hurb jag ska kunna stänga av/på completed-key
		// kolla shauns videos på object methods

		// STOP event from bubbling up (propagate)
		e.stopPropagation();
	}
});

