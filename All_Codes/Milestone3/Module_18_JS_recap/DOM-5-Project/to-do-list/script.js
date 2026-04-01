const listContainer = document.querySelector(".listContainer");
const inputTaskField = document.querySelector('#taskAddInput')
const form = document.querySelector("form");

let todoListArr = [];

function todoRenderList(arr) {
  listContainer.innerHTML = ''
  arr.map((item) => {
    const divElem = document.createElement("div");
    divElem.classList.add("listItem");
    divElem.innerHTML = `<p>${item.task}</p>`;
    
    const buttonElem = document.createElement('button')
    buttonElem.classList.add('taskDeleteBtn')
    buttonElem.innerText = '❌'
    divElem.append(buttonElem)
    buttonElem.addEventListener('click', ()=> {
      handleTaskDelete(item.id)
    })
    listContainer.append(divElem);
  });
}

todoRenderList(todoListArr)

const handleSubmitTask = (e)=> {
  e.preventDefault();
  if(!inputTaskField.value) {
    console.log('please add something in input field')
    return null
  }
  const taskInputValue = inputTaskField.value;
  inputTaskField.value = ''
  const taskAddObj = {
    id: Date.now(),
    task: taskInputValue
  }
  todoListArr.push(taskAddObj)
  todoRenderList(todoListArr)
}

function handleTaskDelete(id) {
  const filteredDelete = todoListArr.filter(item => item.id !== id)
  todoListArr = filteredDelete
  todoRenderList(todoListArr)
}

form.addEventListener('submit', handleSubmitTask)