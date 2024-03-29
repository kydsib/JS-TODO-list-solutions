// ------------------ FIRST SOLUTION -----------\\
// 1. Get input value
/*
let tasks = []

function getTask() {
	let task = document.getElementById('input-val').value
	if (task != '') tasks.push(task)

	let li = document.createElement('li')
	let text = document.createTextNode(task)
	if (task === '') {
		alert('Please enter the task!')
	} else {
		// Delete button creation
		li.appendChild(text)
		let deleteButton = document.createElement('button')
		let btnText = document.createTextNode('x')
		deleteButton.appendChild(btnText)
		deleteButton.classList.add('btn')
		deleteButton.addEventListener('click', deleteTask)
		li.appendChild(deleteButton)

		li.classList.add('task-list__item')
		// Line trough action creation
		li.addEventListener('click', markAsCompleted)
		document.getElementById('tasks').appendChild(li)
		document.getElementById('input-val').value = ''
	}
}

// 2. Add delete button to remove a task from an array
function deleteTask(e) {
	// Retrieving value from parent
	let parentValue = e.target.parentElement.textContent
	// removing button or imput text as - x
	let realValue = parentValue.substring(0, parentValue.length - 1)
	// finding index of the value
	let index = tasks.indexOf(realValue)
	if (index > -1) {
		tasks.splice(index, 1)
	}
	// clearing input field
	e.target.parentNode.innerHTML = ''
}

// 3. Add a line trough for finished tasks
function markAsCompleted(e) {
	if (e.target.style.textDecoration === 'none') {
		e.target.style.textDecoration = 'line-through'
	} else {
		e.target.style.textDecoration = 'none'
	}
}
// 4. Save tasks to local storage
*/

// ----------------- SECOND APPRAOCH ---------------- //

let tasks = []
const input = document.getElementById('input-val')

function getTask(e) {
	let task = input.value
	if (task !== '') {
		tasks.push(task)
		let taskElement = `
		<li class="task-list__item">${task}<button class="btn">x</button></li>
		`
		let tasksList = document.getElementById('tasks')
		tasksList.insertAdjacentHTML('beforeend', taskElement)

		tasksList.addEventListener('click', markAsCompleted)
		// Netinka, nes pagal id selectina tik viena
		// document
		// 	.getElementById('deleteBtn')
		// 	.addEventListener('click', deleteTask)

		input.value = ''
	} else {
		alert('Please enter the task!')
	}
}

input.addEventListener('keyup', e => {
	if (e.keyCode === 13) {
		getTask()
	}
})

function markAsCompleted(e) {
	if (e.target.style.textDecoration === 'none') {
		e.target.style.textDecoration = 'line-through'
	} else {
		e.target.style.textDecoration = 'none'
	}
}

function deleteTask() {}
