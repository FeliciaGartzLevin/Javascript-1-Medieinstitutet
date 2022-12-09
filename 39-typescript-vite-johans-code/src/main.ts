import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

// list of todos
const todos: Todo[] = [ 
	{
	id: 1,
	title: "Learn basic JavaScript",
	completed: true,
	},
	{
	id: 2,
	title: "Learn advanced JavaScript",
	completed: true,
	},
	{
	id: 3,
	title: "Learn basic TypeScript",
	completed: false,
	},
] 

// render todos
const renderTodos = () => {
	/*
	// transform todos into a string-array of `<li>` elements
	const listitems = todos.map(todo => {
		return `<li class="list-group-item">${todo}</li>`
	})

	// implode li-array to a single string
	const output = listitems.join('')

	// replace todosList content
	todosList.innerHTML = output
	*/

	// replace todosList content
	todosList.innerHTML = todos
		.map(todo => 
			// en ternary operator: if todo.completed=true ge <li> class 'completed'. if todo.completed=false, ge ingen ny class alls
			`<li class="list-group-item ${todo.completed ? 'completed': ''} data-todo-id="${todo.id}">
				${todo.title}
			</li>`
			)
		.join('')
}

// lyssna efter klick på hela listan
todosList.addEventListener('click', (e) => {
	const target = (e.target as HTMLElement)
	// OM tagName är LI, GÖR någonting
	// (annars gör ingenting)
	if (target.tagName === "LI") {
		// e.target.classList.toggle("completed");

		//get the `data-todo-id` attribute from the LI element

		const clickedTodoId = Number(target.dataset.todoId);

		const foundTodo = todos.find( todo => todo.id === clickedTodoId)
		
		// if todo was found: change completed-status of found todo 
		// (to the opposite of what it was (false/true))
		if(foundTodo) {

		foundTodo.completed = !foundTodo.completed;
		}


		renderTodos();
		// STOP event from bubbling up (propagate)
		// e.stopPropagation();
	}
})


// create a new todo form
newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')!.value
	if (newTodoTitle.length < 3) {
		alert("Too short todo")
		return
	}

	// giving an id to todos
	const maxTodoId = todos.reduce((maxId, todo) => {
	if(todo.id > maxId) {
		return todo.id;
	}

		return maxId;
	}, 0);
	const newTodoId = maxTodoId + 1;

	// push todo into list of todos
	const newTodo: Todo = {
		id: newTodoId,
		title: newTodoTitle,
		completed: false,
	}
	todos.push(newTodo)

	// empty input
	document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()

