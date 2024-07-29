let tasks = []


function addTask() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const currentTask = {
        'title': taskTitle,
        'description': taskDescription
    }
    const tasksDiv = document.getElementById('tasks');

    if (taskTitle == "" || taskDescription == "") {
        alert("title and description can not be empty");
        return;
    }

    const HTML = `
    <div class="task">
        <div class="task-header">
            <div>
                <span>${tasks.length + 1} Title: </span> <input type="text" class="task-title" value="${taskTitle}" readonly>
            </div>

            <div>
                <span>Description:</span>
                <textarea class="task-description" readonly>${taskDescription}</textarea>
            </div>
        </div>
        <div class="task-footer">
            <button class="edit" onclick="editTask(${tasks.length})">Edit</button>
            <button class="save" onclick="saveTask(${tasks.length})" style="display:none;">Save</button>
            <button class="delete" onclick="deleteTask(${tasks.length})">Delete</button>
        </div>
    </div>`;

    tasks.push(currentTask);
    tasksDiv.insertAdjacentHTML('beforeend', HTML);

    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    console.log(tasks);

}


function editTask(index) {
    const taskDiv = document.querySelectorAll('.task')[index];
    const taskTitle = taskDiv.querySelector('.task-title');
    const taskDescription = taskDiv.querySelector('.task-description');
    const editButton = taskDiv.querySelector('.edit');
    const saveButton = taskDiv.querySelector('.save');

    taskTitle.removeAttribute('readonly');
    taskDescription.removeAttribute('readonly');
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
}

function saveTask(index) {
    const taskDiv = document.querySelectorAll('.task')[index];
    const taskTitle = taskDiv.querySelector('.task-title');
    const taskDescription = taskDiv.querySelector('.task-description');
    const editButton = taskDiv.querySelector('.edit');
    const saveButton = taskDiv.querySelector('.save');

    tasks[index].title = taskTitle.value;
    tasks[index].description = taskDescription.value;
    console.log(tasks);

    taskTitle.setAttribute('readonly', true);
    taskDescription.setAttribute('readonly', true);
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
}

function deleteTask(index) {
    tasks.splice(index, 1);
    const tasksDiv = document.getElementById("tasks");
    tasksDiv.innerHTML = '';
    console.log("here");

    tasks.forEach((task, idx) => {
        let HTML = `
        <div class="task">
            <div class="task-header">
               <div>
                <span>${idx + 1} Title: </span> <input type="text" class="task-title" value="${task.title}" readonly>
            </div>

            <div>
                <span>Description:</span>
                <textarea class="task-description" readonly>${task.description}</textarea>
            </div>
            </div>
            <div class="task-footer">
                <button class="edit" onclick="editTask(${idx})">Edit</button>
                <button class="save" onclick="saveTask(${idx})" style="display:none;">Save</button>
                <button class="delete" onclick="deleteTask(${idx})">Delete</button>
            </div>
        </div>`
        tasksDiv.insertAdjacentHTML('beforeend', HTML);
    })
}
