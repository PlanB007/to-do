const taskList = document.querySelector('#task_list');
const noTasksText = document.querySelector('#no_tasks');
const submitField = document.querySelector('#submit_task');
const clearTasks = document.querySelector('#clear_tasks');
const dataBase = firebase.database().ref();
const dbRef = firebase.database().ref("/u/0/project/to-do-list-b5c66/database/to-do-list-b5c66/data/");
const allTasks = [];

// set in database
const taskCount = 0;



// functions
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
  const stringInput = inputField.value;

  allTasks.push(inputField.value);
  localStorage.setItem('tasks', JSON.stringify(allTasks));
  console.table(allTasks); 
  
  listItem.appendChild(inputNode);
  taskList.appendChild(listItem);
  
  inputField.value = "";

  noTasksText.style.display = 'none';
  
  console.log(stringInput);
  
  dbRef.child('tasks').update({
	  [`task-${taskCount}`]: [`${stringInput}`]
  });

}


dbRef.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});



function clear() {
	localStorage.clear();
	location.reload();
}

submitField.addEventListener("click", getValue);
clearTasks.addEventListener("click", clear);

checkForTasks();


// https://console.firebase.google.com/u/0/project/to-do-list-b5c66/database/to-do-list-b5c66/data/