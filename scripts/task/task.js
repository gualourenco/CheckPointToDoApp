let jwt;

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

async function searchTasks() {

    let configRequest = {
        headers: {
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

    } catch {

    }
}

// Tasks functions

let taskListManager = (tasks) => {
    

    tasks.forEach(task => {
        console.log(task)
        if(task.completed == false){
            pendingTaskRender(task);
        } else {
            finishedTaskRender(task);
        }
    });
}

