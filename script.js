const taskList = document.querySelector('#task_list');
const noTasksText = document.querySelector('#no_tasks');
const submitField = document.querySelector('#submit_task');
const allTasks = [];

function checkForTasks() {
  noTasksText.style.display = 'none';
  if(allTasks.length == '0') {
    noTasksText.style.display = 'inherit';
  }
}

function getValue() {
  const inputField = document.querySelector('#input_task').value;
  const listItem = document.createElement('LI');
  const inputNode = document.createTextNode(inputField);

  listItem.appendChild(inputNode);
  allTasks.push(inputField);
  taskList.appendChild(listItem);

  checkForTasks();
}

submitField.addEventListener("click", getValue);
