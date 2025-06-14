let taskList = [];

function renderTasks() {
  const taskListEl = document.getElementById("taskList");
  taskListEl.innerHTML = "";

  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.className = "task-text";

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Edit";
    updateBtn.className = "btn btn-warning btn-sm";
    updateBtn.onclick = () => updateTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(taskText);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    taskListEl.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    taskList.push(task);
    input.value = "";
    renderTasks();
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

function updateTask(index) {
  const newTask = prompt("Update task:", taskList[index]);
  if (newTask !== null && newTask.trim() !== "") {
    taskList[index] = newTask.trim();
    renderTasks();
  }
}

function clearTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    taskList = [];
    renderTasks();
  }
}
