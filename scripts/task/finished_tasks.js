let finishedTasksUl = document.querySelector(".tarefas-terminadas");

function finishedTaskRender(task) {
  console.log(task);

  let li = document.createElement("li");
  li.classList.add("tarefa");

  li.innerHTML = `
        <div class="not-done" onclick="manipulateFinishedTaskById(${task.id})"></div>
        <div class="descricao">
            <p class="nome">${task.description}</p>
            <p class="timestamp">Criada em: ${task.createdAt}</p>
        </div>
    `;
  finishedTasksUl.appendChild(li);
}

async function manipulateFinishedTaskById(id) {
  //console.log(id);
  //console.log(`${baseUrl()}/tasks/${id}`);
  

  

  let configRequest = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: jwt,
    },
  };
  try {
    let request = fetch(`${baseUrl()}/tasks/${id}`, configRequest);

    if (request.status == 200 || request.status == 204) {
      let response = await request.json();
      console.log(response);
    } else {
      throw Error("Falha ao atualizar a tarefa");
    }
  } catch (error) {
    console.log(error);
  }

  location.reload();
}
