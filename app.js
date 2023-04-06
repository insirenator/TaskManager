import { createTaskComponent} from './js/task_component.js';

// const newTask = createTaskComponent("Do the laundry.");

// document.querySelector('.root-container').appendChild(newTask);

const addBtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#task-input');
const displayArea = document.querySelector('.display-area');

addBtn.addEventListener('click', () => {
	const taskName = taskInput.value;

	if(taskName) {
		const newTask = createTaskComponent(taskName);
		displayArea.appendChild(newTask);
		taskInput.value = "";
	}
	taskInput.focus();

});