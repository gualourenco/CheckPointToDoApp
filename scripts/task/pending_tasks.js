let pendingTasksUl = document.querySelector(".tarefas-pendentes");

function pendingTaskRender(task) {
  console.log(task);

  let li = document.createElement("li");
  li.classList.add("tarefa");

  li.innerHTML = `
        <div class="not-done" onclick="manipulatePendingTaskById(${task.id})"></div>
        <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp">Criada em: ${task.createdAt}</p>
        </div>
    `;
  pendingTasksUl.appendChild(li);
}

function manipulatePendingTaskById(id) {
  //console.log(id);
  console.log(`${baseUrl()}/tasks/${id}`);
  // location.reload();
}
