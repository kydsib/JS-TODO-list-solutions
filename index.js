let tasks = []
// 1. Get input value

function getPrintVal() {
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

// 4. Add delete button to remove a task frpm an array
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

// 5. Add a line trough for finished tasks
function markAsCompleted(e) {
	if (e.target.style.textDecoration === 'none') {
		e.target.style.textDecoration = 'line-through'
	} else {
		e.target.style.textDecoration = 'none'
	}
}
// 6. Save tasks to local storage
