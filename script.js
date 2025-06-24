const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
