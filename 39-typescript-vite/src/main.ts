import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')

type Todo = {
	title: string,
	completed: boolean,
}

const myNewTodo: Todo = {
	title: "My new todo",
	completed: false
}

myNewTodo.

// list of todos
const todos: string[] = []

const renderTodos = () => {

	// transform todos into a string array of `<li>`elements
	const listItems = todos
		.map( todo => `<li class="list-group-item">${todo}</li>`)
		.join('')
}




newTodoForm?.addEventListener('submit', e => {
	e.preventDefault()

	const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')?.value || ''
	
	if(newTodoTitle.length < 3){
		alert("Too short todo")
		return
	}

	// push todo into new list of todos
	todos.push(newTodoTitle)

	// render all todos
	renderTodos()
})

// render all todos
renderTodos()
