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
// const newTodo = document.querySelector('#newTodo');


// list of todos
const todos = [
	{
		id: 1,
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		id: 2,
		title: "Learn DOM",
		completed: false,
	},
	{
		id: 3,
		title: "Take over the world",
		completed: false,
	},
];

// Stoppa in objekt i listan

// STEG 1
const renderTodos = () => {
	todosEl.innerHTML = '';
	todos.forEach( todo => {
		let cssClasses = "list-group-item";

		if (todo.completed) {
			cssClasses += " completed";
			// todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
		} /*else {

			// todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
		}*/

		todosEl.innerHTML += `
		<li class="${cssClasses}" data-todoId="${todo.id}">
		${todo.title}
		</li>`
		;

	});
}
renderTodos();

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
	
	renderTodos();
	newTodoFormEl.reset();
});


// STEG 3

// lyssna efter klick på hela listan
todosEl.addEventListener('click', (e) => {

	// OM tagName är LI, GÖR någonting
	// (annars gör ingenting)
	if (e.target.tagName === "LI") {
		// e.target.classList.toggle("completed");

		//get the `data-todo-id` attribute from the LI element
		// const todoId = e.target.dataset.todoId;

		const clickedTodoId = e.target.dataset.todoId;

		const clickedTodo = todos.find( todo => {
			return todo.id === clickedTodoId;
		});

		// change completed-status of found todo (to the opposite of what it was (false/true))
		clickedTodo.completed = !clickedTodo.completed;

		renderTodos();
		// STOP event from bubbling up (propagate)
		e.stopPropagation();
	}
});

