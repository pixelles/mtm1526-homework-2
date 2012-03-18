var task = document.getElementById('task'); 
var list = document.getElementById('list')
document.getElementById('add-task').addEventListener('click', function (ev) {
	
	if (task.value != '') {
		var newTask = document.createElement('li');
		newTask.innerHTML = task.value;
		list.appendChild(newTask); 
	}
	task.value = '';
}, false);


