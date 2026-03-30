const listContainer = document.querySelector(".listContainer");
const inputTaskField = document.querySelector('#taskAddInput')
const form = document.querySelector("form");
const taskDeleteBtn = document.querySelector(".taskDeleteBtn");

const todoListArr = [
  // {
  //   id: 1,
  //   task: "i will become a good full-stack developer",
  // },
  // {
  //   id: 2,
  //   task: "and for that i have to be a discipline person",
  // },
  // {
  //   id: 3,
  //   task: "that mean i have to leave my comfort zone",
  // },
];

function todoRenderList(arr) {
  listContainer.innerHTML = ''
  arr.map((item) => {
    const divElem = document.createElement("div");
    divElem.classList.add("listItem");
    divElem.innerHTML = `<p>${item.task}</p>
        <button class="taskDeleteBtn">❌</button>`;
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
  const taskAddObj = {
    id: 1,
    task: taskInputValue
  }
  todoListArr.push(taskAddObj)
  todoRenderList(todoListArr)
}

form.addEventListener('submit', handleSubmitTask)