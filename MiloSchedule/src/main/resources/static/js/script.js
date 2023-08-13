


window.addEventListener("load", function(e) {
    console.log("Page loaded");
    init();
});

function init() {
    loadPetScheduleList();
    
    document.newTaskForm.addTaskButton.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Adding task");
        
        let form = document.newTaskForm;
        let petTask = {
            name: form.name.value,
            description: form.description.value,
            frequency: form.frequency.value,
            taskType: { id: parseInt(form.taskType.value) }
        };

        console.log(petTask);
        addNewTask(petTask);
    });
}

function displayError(msg) {
    let dataDiv = document.getElementById('TaskDetailsDiv');
    dataDiv.textContent = '';
    dataDiv.textContent = msg;
}

function loadPetScheduleList() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/pettasks");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let tasks = JSON.parse(xhr.responseText);
                displayScheduleList(tasks);
                console.log(tasks);
            } else {
                displayError("Invalid data", xhr.responseText);
            }
        }
    };

    xhr.send();
}

function displayScheduleList(taskList) {
    let tbody = document.getElementById("taskTableBody");
    tbody.innerHTML = "";

    for (let task of taskList) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = task.id;
        tr.appendChild(td);
        
        td = document.createElement("td");
        td.textContent = task.name;
        tr.appendChild(td);

        tr.addEventListener("click", function(e) {
            let taskId = e.target.closest('tr').firstElementChild.textContent;
            document.getElementById("TaskDetailsDiv").style.display = "block";
            getTaskDetails(taskId);
        });

        tbody.appendChild(tr);
    }
}

function addNewTask(newTask) {
    let xhr = new XMLHttpRequest();    
    xhr.open("POST", "/api/pettasks");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                let createdMeal = JSON.parse(xhr.responseText); 
                loadPetScheduleList(createdMeal); 
                document.newTaskForm.reset();
            } else if (xhr.status === 400) {
                displayError("Invalid task data", xhr.responseText); 
            } else {
                displayError("Failed to add new task", xhr.status, xhr.responseText);
            }
        }
    };

    xhr.setRequestHeader("Content-type", "application/json");
    let taskJson = JSON.stringify(newTask);
    xhr.send(taskJson);
}

function getTaskDetails(taskId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/pettasks/" + taskId);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                let task = JSON.parse(xhr.responseText);
                displayTaskDetails(task);
            } else {
                displayError("Error fetching task details");
            }
        }
    };
    xhr.send();
}

function displayTaskDetails(task) {
    document.getElementById("task-id").textContent = task.id;
    document.getElementById("task-name").textContent = task.name;
    document.getElementById("task-description").textContent = task.description;
    document.getElementById("task-frequency").textContent = task.frequency;
    document.getElementById("task-type-id").textContent = task.taskType.id;
}
















