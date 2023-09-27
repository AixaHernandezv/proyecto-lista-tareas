const taskInput = document.querySelector('#taskInput');
const btnAddTask = document.querySelector('#btnAddTask');
const taskContainer = document.querySelector('#taskContainer');
let tasks =[];

btnAddTask.addEventListener('click', addTask);
taskInput.addEventListener('keyup', (evt) => {
    if (evt.code === 'Enter') {
        addTask();
    }
})


function addTask() {
    if (taskInput.value === "") {
        alert("no hay nada que agegar");
        taskInput.focus();
        return
    } 
    
    tasks.push(taskInput.value);
    console.log(tasks);
    listTasks();
    taskInput.value = "";
    taskInput.focus(); 

    
}


function listTasks() {
    taskContainer.innerHTML='';
    tasks.forEach(task => {
        const divTaskHtml = document.createElement('div');
        divTaskHtml.classList.add('tasks__item');
        divTaskHtml.innerHTML = `
            <div id="task" class=" item__task">
                <p class="task__paragraph"> ${task} </p>
            </div>
            <i  class="fa-solid fa-check item__btn"></i>
            <i class="fa-solid fa-xmark item__btn"></i>
        `
        taskContainer.appendChild(divTaskHtml);
    });
    
}