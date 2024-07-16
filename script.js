const taskInput = document.getElementById('task-input')
const taskForm = document.getElementById('task-form')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const task = taskInput.value;
    console.log(task);

    if(task == ""){
        alert("Please your task");
    }
    else{
    const listItem = document.createElement('li');
    listItem.innerHTML = task;
    taskList.append(listItem);
    let span = document.createElement('span');
    span.innerHTML = `&times`;
    listItem.appendChild(span);
    taskInput.value = "";
    saveData();
    }
});


taskList.addEventListener('click' , (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    if(e.target.tagName == 'SPAN'){
        const li = e.target.parentElement;
        li.remove();
        saveData();
    }
})

function dispData(){
    task.innerHTML = localStorage.getItem("listItem");
}

function saveData (){
    localStorage.setItem('listItem', taskList.innerHTML);
}

dispData();