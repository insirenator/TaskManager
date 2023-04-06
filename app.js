import { createTaskComponent} from './js/task_component.js';



const addBtn = document.querySelector('#add-btn');
const taskInput = document.querySelector('#task-input');
const displayArea = document.querySelector('.display-area');


// For styling reference, remove it later
displayArea.appendChild(createTaskComponent("Do the laundry."));
displayArea.appendChild(createTaskComponent("Do the laundry."));

addBtn.addEventListener('click', () => {
	const taskName = taskInput.value;

	if(taskName) {
		const newTask = createTaskComponent(taskName);
		displayArea.appendChild(newTask);
		taskInput.value = "";
	}
	taskInput.focus();

});