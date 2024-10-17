const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = ""; // Clear the input
  }
});

// Function to create a new task item
function addTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  li.appendChild(span);

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => editTask(li, span));
  li.appendChild(editBtn);

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTask(li));
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

// Function to delete a task
function deleteTask(taskElement) {
  taskList.removeChild(taskElement);
}

// Function to edit a task
function editTask(taskElement, taskSpan) {
  const newTaskText = prompt("Edit your task:", taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText;
  }
}
