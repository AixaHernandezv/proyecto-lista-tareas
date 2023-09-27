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
    tasks.forEach((task, index)=> {
        const divTaskHtml = document.createElement('div');
        divTaskHtml.classList.add('tasks__item');
        divTaskHtml.innerHTML = `
            <div id="task" class=" item__task">
                <p id="taskParagraph${index}" class="task__paragraph"> ${task} </p>
            </div>
            <i  id="btnCheck${index}"  class="fa-solid fa-check item__btn" data-id="${index}"></i>
            <i class="fa-solid fa-xmark item__btn"></i>
        `
        taskContainer.appendChild(divTaskHtml);
        const btnCheck = document.querySelector(`#btnCheck${index}`);
        
        btnCheck.addEventListener('click',addClassCrossedOut);
    });
    
}


function addClassCrossedOut(e) {
const index = e.target.getAttribute("data-id");
const taskParagraph = document.querySelector(`#taskParagraph${index}`)
taskParagraph.classList.add('task__crossedout');


}