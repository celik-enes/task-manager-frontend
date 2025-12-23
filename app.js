const API_URL = "http://localhost:4000/tasks";

function loadTasks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      data.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title + (task.completed ? " ✅" : "");

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Tamamla";
        completeBtn.onclick = () => completeTask(task.id);
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Sil";
        deleteBtn.onclick = () => deleteTask(task.id);
        li.appendChild(deleteBtn);

        list.appendChild(li);
      });
    });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value;
  if (!title) return;

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  }).then(() => {
    input.value = "";
    loadTasks();
  });
}

function completeTask(id) {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true })
  }).then(loadTasks);
}

function deleteTask(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  }).then(loadTasks);
}

loadTasks();
