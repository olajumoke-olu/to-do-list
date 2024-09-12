document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");

  const updateTaskCount = () => {
    const tasks = taskList.querySelectorAll("li");
    const pendingTasks = Array.from(tasks).filter(
      (task) => !task.querySelector(".task-text").style.textDecoration
    ).length;
    taskCount.textContent = `${pendingTasks} tasks pending`;
  };

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", () => {
      span.style.textDecoration = span.style.textDecoration
        ? ""
        : "line-through";
      updateTaskCount();
    });

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      updateTaskCount();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
  });
});
