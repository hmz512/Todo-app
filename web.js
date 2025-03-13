const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAllButton = document.getElementById("clearAll");

let tasks = []; // Array to store tasks

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">🗑️</button>
        `;
        taskList.appendChild(li);
    });
    taskCount.textContent = `You have ${tasks.length} pending tasks`;
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = ""; // Clear input
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to clear all tasks
function clearAllTasks() {
    tasks = [];
    renderTasks();
}

// Event listeners
addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = parseInt(event.target.dataset.index);
        deleteTask(index);
    }
});

clearAllButton.addEventListener("click", clearAllTasks);

// Initial render
renderTasks();