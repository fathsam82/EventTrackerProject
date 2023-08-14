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

    document.getElementById("updateTaskButton").addEventListener("click", function() {
        let editedTask = {
            id: document.getElementById("task-id").textContent,
            name: document.getElementById("edit-name").value,
            description: document.getElementById("edit-description").value,
            frequency: document.getElementById("edit-frequency").value,
            taskType: { id: parseInt(document.getElementById("edit-taskType").value) }
        };
        updateTask(editedTask);
    });
}

function displayError(msg) {
    let dataDiv = document.getElementById('TaskDetailsDiv');
    dataDiv.textContent = '';
    dataDiv.textContent = msg;
}


function aggregateData(tasks) {
    let taskTypeCounts = {};
    for (let task of tasks) {
        if (taskTypeCounts[task.taskType.name]) {
            taskTypeCounts[task.taskType.name]++;
        } else {
            taskTypeCounts[task.taskType.name] = 1;
        }
    }
    return taskTypeCounts;
}


let chartInstance;

function visualizeData(aggregatedData) {
    let labels = Object.keys(aggregatedData);
    let data = Object.values(aggregatedData);

    let ctx = document.getElementById('myChart').getContext('2d');

    if (chartInstance) {
       
        chartInstance.data.labels = labels;
        chartInstance.data.datasets[0].data = data;
        chartInstance.update();
    } else {
        
        chartInstance = new Chart(ctx, {
            type: 'bar', 
            data: {
                labels: labels, 
                datasets: [{
                    label: 'Number of Tasks',
                    data: data 
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true 
                    }
                }
            }
        });
    }
}


function loadPetScheduleList() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/pettasks");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let tasks = JSON.parse(xhr.responseText);
                displayScheduleList(tasks);
                let aggregatedResults = aggregateData(tasks);   
                visualizeData(aggregatedResults);
                console.log(tasks);
            }
            else if (xhr.status === 400) {
                displayError("Failed to get task", xhr.responseText);
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
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.display = "none"; 
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation(); 
            let taskId = e.target.closest('tr').firstElementChild.textContent;
            deleteTask(taskId);
        });

        let actionsTd = document.createElement("td");
        actionsTd.appendChild(deleteBtn);
        tr.appendChild(actionsTd);

        tr.addEventListener("click", function(e) {
            let allDeleteButtons = tbody.querySelectorAll("button");
            for (let btn of allDeleteButtons) {
                if (btn.style.display !== "none") {
                    btn.style.display = "none";
                }
            }          
            let btn = e.currentTarget.querySelector("button");
            btn.style.display = "inline-block";

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
            }
            else if (xhr.status === 400){
				displayError("Failed to get task")
			}
             else {
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

    document.getElementById("edit-name").value = task.name;
    document.getElementById("edit-description").value = task.description;
    document.getElementById("edit-frequency").value = task.frequency;
    document.getElementById("edit-taskType").value = task.taskType.id;
}

function updateTask(task) {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/pettasks/" + task.id);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                loadPetScheduleList();
            } 
            else if (xhr.status === 400){
				displayError("Failed to update task");
			}
            else {
                displayError("Error updating task");
            }
        }
    };

    xhr.setRequestHeader("Content-type", "application/json");
    let taskJson = JSON.stringify(task);
    xhr.send(taskJson);
}

function deleteTask(taskId) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/api/pettasks/" + taskId);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 204) {  
				loadPetScheduleList();
            }
            else if (xhr.status === 400){
				displayError("Failed to delete task")
			} else {
                displayError("Failed to delete task. Please try again."); 
            }
        }
    };

    xhr.send(); 
}