"use strict";
let tasks = [];
function createTaskDiv(currtask, idx) {
    const task = document.createElement('div');
    task.className = 'task';
    const taskHeader = document.createElement('div');
    taskHeader.className = 'task-header';
    const divOne = document.createElement('div');
    const spanOne = document.createElement('span');
    spanOne.textContent = `${idx + 1}. Title:`;
    divOne.appendChild(spanOne);
    const taskTitleInput = document.createElement('input');
    taskTitleInput.type = 'text';
    taskTitleInput.className = 'task-title';
    taskTitleInput.value = currtask.title;
    taskTitleInput.readOnly = true;
    divOne.appendChild(taskTitleInput);
    taskHeader.appendChild(divOne);
    const divTwo = document.createElement('div');
    const spanTwo = document.createElement('span');
    spanTwo.textContent = `Description: `;
    divTwo.appendChild(spanTwo);
    const descriptionTextArea = document.createElement('textarea');
    descriptionTextArea.className = 'task-description';
    descriptionTextArea.textContent = currtask.description;
    taskTitleInput.readOnly = true;
    divTwo.appendChild(descriptionTextArea);
    taskHeader.appendChild(divTwo);
    task.appendChild(taskHeader);
    const taskFooter = document.createElement('div');
    taskFooter.className = 'task-footer';
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.onclick = () => editTask(idx);
    editButton.textContent = 'Edit';
    taskFooter.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.onclick = () => deleteTask(idx);
    deleteButton.textContent = 'Delete';
    taskFooter.appendChild(deleteButton);
    task.appendChild(taskFooter);
    return task;
}
function addTask() {
    const taskTitle = document.getElementById('task-title').value || '';
    const taskDescription = document.getElementById('task-description').value || '';
    console.log('title: ' + taskTitle + 'desc' + taskDescription);
    let taskLength = tasks.length;
    const currentTask = {
        title: taskTitle,
        description: taskDescription
    };
    const tasksDiv = document.getElementById('tasks');
    if (taskTitle == '' || taskDescription == '') {
        alert('title and description can not be empty');
        return;
    }
    const task = createTaskDiv(currentTask, taskLength);
    tasksDiv === null || tasksDiv === void 0 ? void 0 : tasksDiv.insertAdjacentElement('beforeend', task);
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    tasks.push(currentTask);
    console.log(tasks);
}
function editTask(index) {
    const taskDiv = document.querySelectorAll('.task')[index];
    let editedTask = tasks[index];
    console.log(tasks + " " + index);
    console.log("edited task:" + editedTask);
    let newTitle = prompt("Enter the new title") || editedTask.title;
    editedTask.title = newTitle;
    const taskTitle = taskDiv.querySelector('.task-title');
    if (taskTitle) {
        taskTitle.removeAttribute('readonly');
        taskTitle.value = newTitle;
    }
    let newDescription = prompt("Enter the new Description") || editedTask.description;
    editedTask.description = newDescription;
    const taskDescription = taskDiv.querySelector('.task-description');
    if (taskDescription) {
        taskDescription.removeAttribute('readonly');
        taskDescription.textContent = newDescription;
    }
    tasks[index] = editedTask;
    console.log(tasks);
}
function deleteTask(index) {
    tasks.splice(index, 1);
    const tasksDiv = document.getElementById("tasks");
    if (tasksDiv)
        tasksDiv.innerHTML = '';
    tasks.forEach((currtask, idx) => {
        const task = createTaskDiv(currtask, idx);
        tasksDiv === null || tasksDiv === void 0 ? void 0 : tasksDiv.insertAdjacentElement('beforeend', task);
        document.getElementById('task-title').value = '';
        document.getElementById('task-description').value = '';
        console.log(tasks);
    });
}
