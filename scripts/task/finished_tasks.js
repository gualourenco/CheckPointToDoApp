let finishedTasksUl = document.querySelector(".tarefas-terminadas");

function finishedTaskRender(task) {
  console.log(task);

  let li = document.createElement("li");
  li.classList.add("tarefa");

  li.innerHTML = `
        <div class="not-done" onclick="manipulateTaskById(${task.id})"></div>
        <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp">Criada em: ${task.createdAt}</p>
        </div>
    `;
  finishedTasksUl.appendChild(li);
}

function manipulateTaskById(id) {
  console.log(id);

  location.reload();
}
