// Get the input field and the add button
var inputField = document.getElementById("new-task");
var addButton = document.getElementById("add-task");
var taskList = document.getElementById("task-list");

// Add a click event listener to the add button
addButton.addEventListener("click", function() {
  // Get the task text from the input field
  var taskText = inputField.value;

  // Create a new list item
  var newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.innerHTML = taskText;

  // Create a delete button for the new task
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function(){
    taskList.removeChild(newTask);
  }

  // Add the delete button to the new task
  newTask.appendChild(deleteButton);

  // Add the new task to the task list
  taskList.appendChild(newTask);

  // Clear the input field
  inputField.value = "";
});
