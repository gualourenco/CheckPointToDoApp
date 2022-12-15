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

async function manipulatePendingTaskById(id) {

  //console.log(id);
  //console.log(`${baseUrl()}/tasks/${id}`);
  let turningTask = {
    "completed": true
  }

  turningJson = JSON.stringify(turningTask)

  let configRequest = {
    method: 'PUT',
    body: turningJson,
    headers: {
      "Content-type": "application/json",
      'authorization' : jwt
    }

  }
  try {
    let request = fetch(`${baseUrl()}/tasks/${id}`, configRequest)

    if (request.status == 200 || request.status == 204){
      let response = await request.json();
      console.log(response);
      
    }
    else {
      throw Error("Falha ao atualizar a tarefa")
    }
  }
  catch(error){
    console.log(error);
  }
  

    
  location.reload();
}
