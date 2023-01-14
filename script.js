const taskInput = document.querySelector("#task");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
  // Get the task input value
  const task = taskInput.value;
  
  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = task;
  
  // Append the new task to the task list
  taskList.appendChild(li);
  
  // Clear the input field
  taskInput.value = "";
});
