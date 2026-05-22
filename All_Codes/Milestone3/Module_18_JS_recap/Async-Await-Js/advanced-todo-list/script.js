const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector(".addBtn");
const todoContainer = document.querySelector(".todoContainer");

const API = "https://6a0f2cad1736097c360b3d4c.mockapi.io/api/v1/advanceTodos";


addBtn.addEventListener("click", () => {
  // const value = taskInput.value;
  postTodo()
});

async function fetchTodo() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    
    //? looping
    todoContainer.innerHTML = ''
    data.forEach(elem => {
      const todoDiv = document.createElement('div')
      todoDiv.classList.add('todo')
      todoDiv.innerHTML = `<p>${elem.text}</p>
      <button>Edit</button>
      <button onclick="deleteTodo(${elem.id})">Delete</button>`
      
      todoContainer.append(todoDiv)
    });
  } catch (error) {
    console.log(error)
  }
}

fetchTodo();


async function postTodo() {
  try {
    const taskInputVal = taskInput.value;
    if(taskInputVal === '') {
      return
    }

    const response = await fetch(API, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: taskInputVal.trim()
      })
    })
    
    if(response.status === 201) {
      fetchTodo()
    }
    
    taskInput.value = ''
  } catch (error) {
    console.log(error)
  }
}


async function deleteTodo(id) {
  try {
    const response = await fetch(`${API}/${id}`, {
      method:"DELETE",
    })
    
    if(response.status === 200) {
      fetchTodo()
    }
  } catch (error) {
    console.log(error)
  }
}