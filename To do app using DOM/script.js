document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const pendingButton = document.getElementById("pendingButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        setupTaskItemClick(taskItem);
      }
    });
  
    pendingButton.addEventListener("click", function () {
      const allTasks = document.querySelectorAll("li");
      allTasks.forEach(task => {
        if (!task.classList.contains("completed")) {
          task.style.display = "block";
        } else {
          task.style.display = "none";
        }
      });
    });
  
    function setupTaskItemClick(taskItem) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Task Done";
      deleteButton.classList.add("delete-button");
  
      taskItem.appendChild(deleteButton);
  
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
      });
  
      taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
      });
    }
  });
  