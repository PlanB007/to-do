const taskList = document.querySelector('#task_list');
const noTasksText = document.querySelector('#no_tasks');
const submitField = document.querySelector('#submit_task');
const allTasks = [];

function checkForTasks() {
  if(localStorage.getItem('tasks') === null) {
	console.log('no local storage');
	noTasksText.style.display = 'inherit';  
  } else {
	  console.log('storage detected');
	  noTasksText.style.display = 'none';
	  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
	  console.log(savedTasks);

	  for(let task of savedTasks) {

			  console.log('func runned');
			  const list = document.createElement('LI');
			  list.textContent = task;
			  taskList.appendChild(list);
			  allTasks.push(task);

	  }
  }

}

function getValue() {
  const inputField = document.querySelector('#input_task');
  const listItem = document.createElement('LI');
  const inputNode = document.createTextNode(inputField.value);


  allTasks.push(inputField.value);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  console.table(allTasks); 
  
  listItem.appendChild(inputNode);
  taskList.appendChild(listItem);
  
  inputField.value = "";

  noTasksText.style.display = 'none';

}

checkForTasks();
submitField.addEventListener("click", getValue);

//localStorage.clear();
