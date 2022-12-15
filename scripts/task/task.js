let jwt;
let newTask = document.querySelector("#novaTarefa");
let subTask = document.querySelector("#submitTask");
let logOut = document.querySelector('#closeApp')

onload = function(){

    jwt = sessionStorage.getItem('jwt');

    if(jwt) {
        searchUserData();

        searchTasks();
    }else {
        this.window.location.href = "./index.html";
    };


};

function searchUserData(){
    

    let configRequest = {
        headers: {
        'authorization': jwt
        }
    }
    fetch(`${baseUrl()}/users/getMe`, configRequest)
    .then(
        answer => {
            return answer.json();
        }
    )
    .then(
        answer => {
            
            renderUserData(answer);
        }
    )
    .catch(
        error => {
            console.log(error);
        }
    )
    
    function renderUserData(userData){
        let userNameTask = document.getElementById('userNameTask');
        userNameTask.innerText = `${userData.firstName} ${userData.lastName}`;
        console.log(userData);
    }
}

logOut.addEventListener('click', function(){
    sessionStorage.removeItem('jwt')
    window.location.href = "index.html"
})

async function searchTasks() {

    let configRequest = {
        headers: {
            "Contet-type": "application/json",
            'authorization': jwt
        }
    }

    try {
        let apiAnswer = await fetch(`${baseUrl()}/tasks`, configRequest);

        if (apiAnswer.status == 200){
            let finalAnswer = await apiAnswer.json();
            taskListManager(finalAnswer);
        } else {
            throw Error('Não foi possível buscar a lista de tarefas.');
        }

    } catch (error){
        alert(error);
    }
}

// Tasks functions

let taskListManager = (tasks) => {
    

    tasks.forEach(task => {
        
        if(task.completed == false){
            pendingTaskRender(task);
        } else {
            finishedTaskRender(task);
        }
    });
}

async function postNewTask(){

    jwt = sessionStorage.getItem("jwt");
    
    let taskObj = {
        description: newTask.value,
        completed: false
    }

    let taskJson = JSON.stringify(taskObj);

    let newTaskRequest = {
        method: "POST",
        body: taskJson,
        headers: {
            "Content-type": "application/json",
            "authorization": jwt
        }
    }

    try {
        let taskRequest = fetch(`${baseUrl()}/tasks`, newTaskRequest)

        if (taskRequest.status == 200 || taskRequest == 204){
            taskRequest.json()
            console.log(response)
        }
        else{
            throw taskRequest
        }
    }
    catch{
        alert("Parabéns! Você tem uma nova tarefa")
    }
}