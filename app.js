import { createTaskComponent, isValidTaskName } from './js/task_component.js';
import * as op from './js/operations.js'

const addBtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#task-input');
const displayArea = document.querySelector('.display-area');

// Update the display area by reading the saved tasks
window.addEventListener('DOMContentLoaded', () => {
	updateDisplayArea();
});

// For styling reference, remove it later
// displayArea.appendChild(createTaskComponent("Do the laundry."));
// displayArea.appendChild(createTaskComponent("Do the laundry.", true));

addBtn.addEventListener('click', () => {
	const taskName = taskInput.value;

	if(isValidTaskName(taskName)) {
		//Unique id to map in taskList object
		let uniqueId = Date.now();
		// creating the task in local storage
		op.createTask(taskName, uniqueId);
		// Adding task component to UI
		const newTask = createTaskComponent(taskName, uniqueId);
		displayArea.appendChild(newTask);
		taskInput.value = "";
	}
	taskInput.focus();

});

// Updates the display area
function updateDisplayArea() {
	
	let taskList = op.getTaskList();
	console.log(taskList);

	for (let uid in taskList) {
		displayArea.appendChild(createTaskComponent(taskList[uid].name, uid, taskList[uid].completed));
	}
}