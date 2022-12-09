let pendingTasksUl = document.querySelector(".tarefas-pendentes");
let jwtPending;

function pendingTaskRender(task) {
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
  pendingTasksUl.appendChild(li);
}

function manipulateTaskById(id){
    console.log(id);

     let configRequest = {
       headers: {
         'authorization': jwtPending
       },
     };

    fetch(`${baseUrl()}/tasks/${id}`, configRequest)
    .then(
      answer =>{
        
        return answer.json()
      }
        
    )
    .then(
          answer => {
            answer.completed = true;
          }
    )
    .catch(
      error => {
        console.log(error)
      }

    )
   
    location.reload();
};

