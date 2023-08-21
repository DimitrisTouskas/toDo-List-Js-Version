document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;

      taskList.appendChild(listItem);
      taskInput.value = "";

      // Add event listeners for edit and delete buttons
      const editButton = listItem.querySelector(".edit");
      const deleteButton = listItem.querySelector(".delete");

      editButton.addEventListener("click", function () {
        editTask(listItem);
      });

      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
    }
  });

  function editTask(listItem) {
    const taskText = listItem.querySelector(".task-text");
    const editButton = listItem.querySelector(".edit");

    const newTaskText = prompt("Edit task:", taskText.textContent);
    if (newTaskText !== null) {
      taskText.textContent = newTaskText;
    }
  }
});
