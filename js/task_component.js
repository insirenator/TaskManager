function createTaskComponent(taskName) {
	// Main container
	const taskContainer = document.createElement('div');
	//Checkbox
	const checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	// Task
	const task = document.createElement('input');
	task.value = taskName;
	task.type = "text";
	task.disabled = true;
	task.onblur = () => {
		task.disabled = true;
	};
	// Control Icons
	// Edit
	const editBtn = document.createElement('span');
	editBtn.classList.add('material-icons');
	editBtn.classList.add('icons');
	editBtn.textContent = 'edit';
	editBtn.addEventListener('click', () => {
		task.disabled = false;
		task.focus();
	});
	//Delete
	const deleteBtn = document.createElement('span');
	deleteBtn.classList.add('material-icons');
	deleteBtn.classList.add('icons');
	deleteBtn.textContent = 'delete';
	deleteBtn.onclick = () => {
		taskContainer.remove();
	};

	// Add all to main container
	taskContainer.appendChild(checkbox);
	taskContainer.appendChild(task);
	taskContainer.appendChild(editBtn);
	taskContainer.appendChild(deleteBtn);

	//CheckBox Function
	checkbox.onclick = () => {
		if(checkbox.checked) {
			task.style.textDecoration = "line-through";
		} else {
			task.style.textDecoration = "none";
		}
	};

	//Return component
	return taskContainer;
}

export { createTaskComponent };