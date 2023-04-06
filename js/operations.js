function getTaskList() {
	let data = localStorage.getItem('taskList');

	if (data === null) {
		localStorage.setItem('taskList', '{}');
		return {};
	}

	return JSON.parse(data);
}

function createTask(taskName, uniqueId) {
	let taskList = getTaskList()
	taskList[uniqueId] = {name: taskName, completed: false};
	localStorage.setItem('taskList', JSON.stringify(taskList));
}

function deleteTask(uniqueId) {
	let taskList = getTaskList();
	delete taskList[uniqueId];
	localStorage.setItem('taskList', JSON.stringify(taskList));
}

function updateTask(uniqueId, newName, newStatus = false) {
	let taskList = getTaskList();
	taskList[uniqueId].name = newName;
	taskList[uniqueId].completed = newStatus;
	localStorage.setItem('taskList', JSON.stringify(taskList));
}



export { getTaskList, createTask, deleteTask, updateTask };