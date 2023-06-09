import * as op from './operations.js';

function createTaskComponent(taskName, uniqueId, completed=false) {

	let task_name = taskName;

	// Main container
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('task-container');
	taskContainer.id = uniqueId;
	
	//Checkbox
	const checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.classList.add('checkboxes');
	
	// Task
	const task = document.createElement('input');
	task.classList.add('task-fields');
	task.value = taskName;
	task.type = "text";
	task.disabled = true;
	
	// Control Icons
	// Edit
	const editBtn = document.createElement('span');
	editBtn.classList.add('material-icons');
	editBtn.classList.add('icons');
	editBtn.textContent = 'edit';

	//Delete
	const deleteBtn = document.createElement('span');
	deleteBtn.classList.add('material-icons');
	deleteBtn.classList.add('icons');
	deleteBtn.textContent = 'delete';
	deleteBtn.onclick = () => {
		op.deleteTask(uniqueId);
		taskContainer.remove();
	};

	//Cross
	const crossBtn = document.createElement('span');
	crossBtn.classList.add('material-icons');
	crossBtn.classList.add('icons');
	crossBtn.textContent = 'close';
	crossBtn.style.display = "none";

	// Done 
	const doneBtn = document.createElement('span');
	doneBtn.classList.add('material-icons');
	doneBtn.classList.add('icons');
	doneBtn.textContent = 'done';
	doneBtn.style.display = "none";

	// Add all to main container
	taskContainer.appendChild(checkbox);
	taskContainer.appendChild(task);
	taskContainer.appendChild(editBtn);
	taskContainer.appendChild(deleteBtn);
	taskContainer.appendChild(doneBtn);
	taskContainer.appendChild(crossBtn);

	//CheckBox Function
	checkbox.onclick = () => {
		if(checkbox.checked) {
			task.style.textDecoration = "line-through";
			op.updateTask(uniqueId, task_name, true);
		} else {
			task.style.textDecoration = "none";
			op.updateTask(uniqueId, task_name, false);
		}
	};

	if(completed){
		checkbox.checked = true;
		task.style.textDecoration = "line-through";
	}

	// Edit Button Function
	editBtn.addEventListener('click', () => {
		task.disabled = false;
		task.focus();
		editBtn.style.display = "none";
		deleteBtn.style.display = "none";
		checkbox.style.display = "none";
		crossBtn.style.display = "inline";
		doneBtn.style.display = "inline";
	});

	// Done Button Function
	doneBtn.addEventListener('click', () => {
		task.disabled = true;
		editBtn.style.display = "inline";
		deleteBtn.style.display = "inline";
		checkbox.style.display = "inline";
		crossBtn.style.display = "none";		
		doneBtn.style.display = "none";

		if(isValidTaskName(task.value)) {
			task_name = task.value;
			op.updateTask(uniqueId, task_name);
		}		
		task.value = task_name;

	});

	// Cross Button Function
	crossBtn.addEventListener('click', () => {
		task.disabled = true;
		editBtn.style.display = "inline";
		deleteBtn.style.display = "inline";
		checkbox.style.display = "inline";
		crossBtn.style.display = "none";		
		doneBtn.style.display = "none";
		task.value = task_name;
	});

	//Return component
	return taskContainer;
}

function isValidTaskName(task_name) {
	return /^[\d\w]+/.test(task_name);
}

export { createTaskComponent, isValidTaskName };