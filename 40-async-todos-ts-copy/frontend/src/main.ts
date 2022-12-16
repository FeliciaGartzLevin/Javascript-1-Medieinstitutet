import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
	id?: number,
	title: string,
	completed: boolean,
}

// Local variable containing all the todos from the server
let todos: ITodo[] = []




/**
 * Get todos from server, update `todos`-array and render todos.
 */
const getTodos = async () => {
	// Fetch todos from server and update local copy
	todos = await fetchTodos()

	// Render todos
	renderTodos()
}

/**
 * Render todos to DOM
 */
const renderTodos = () => {
  // Render uncompleted todos
	document.querySelector('#todos')!.innerHTML = todos
    .filter(todo => !todo.completed)
		.map(todo => `
			<li class="list-group-item">
				${todo.title}
			</li>
      `)
		.join('')

  // Render completed todos
  document.querySelector('#completed-todos')!.innerHTML = todos
  .filter(todo => todo.completed)
  .map(todo => `
    <li class="list-group-item">
      ${todo.title}
    </li>
    `)
  .join('')

}

/**
 * Listen for when the Create New Todo form is submitted
 */
document.querySelector('#new-todo-form')?.addEventListener('submit', async e => {
  e.preventDefault()

  const newTodoTitle = document.querySelector<HTMLInputElement>('#newTodo')?.value
  if(!newTodoTitle){
    alert("That's not a todo")
    return
  }

  // Create a new Todo object
  const newTodo: ITodo = {
    title: newTodoTitle,
    completed: false,
  }

	// POST todo to server
  await createTodo(newTodo)

	// Get the new list of todos from the server
  getTodos()

	// Reset form
  document.querySelector<HTMLInputElement>('#newTodo')!.value = ''

})

getTodos()

// ändra mellan completed/not completed i servern och på DOM när man klickar på todon

// lyssna efter klick på hela listan
document.querySelectorAll<HTMLElement>('ul')?.addEventListener('click', (e) => {
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