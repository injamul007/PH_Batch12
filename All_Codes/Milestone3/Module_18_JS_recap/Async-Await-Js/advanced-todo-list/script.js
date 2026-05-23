const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector(".addBtn");
const todoContainer = document.querySelector(".todoContainer");

const API = "https://6a0f2cad1736097c360b3d4c.mockapi.io/api/v1/advanceTodos";


addBtn.addEventListener("click", () => {
  postTodo()
});

async function fetchTodo() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    
    //? looping
    if(data) {
      todoContainer.innerHTML = ''
    data.forEach(elem => {
      const todoDiv = document.createElement('div')
      todoDiv.classList.add('todo')
      todoDiv.innerHTML = `
      <input class="editInput" type="text"  value="${elem.text}" readonly />
      <button class="editBtn">Edit</button>
      <button class="saveBtn">Save</button>
      <button class="deleteBtn">Delete</button>`

      const editInput = todoDiv.querySelector('.editInput')
      editInput.style.outline = 'none'
      editInput.style.cursor = "default"
      
      const editBtn = todoDiv.querySelector('.editBtn')
      editBtn.addEventListener('click', ()=> {
        editBtn.style.display = 'none'
        saveBtn.style.display = 'flex'
        editInput.readOnly  = false
        editInput.style.border = '1.5px solid black'
        editInput.style.backgroundColor = 'white'
        editInput.style.cursor = "text"
      })
      
      const saveBtn = todoDiv.querySelector('.saveBtn')
      saveBtn.style.display = 'none'
      saveBtn.addEventListener('click',()=> {
        editBtn.style.display = 'flex'
        saveBtn.style.display = 'none'
        editInput.readOnly  = true
        editInput.style.border = 'none'
        editInput.style.backgroundColor = '#16918c'
        editInput.style.cursor = "default"

        updateTodo(elem.id, editInput.value)
      })

      const deleteBtn = todoDiv.querySelector('.deleteBtn')
      deleteBtn.addEventListener('click', ()=> {
        deleteTodo(elem.id)
      })
      
      todoContainer.append(todoDiv)
    });
    }
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


async function updateTodo(id,editValue){
  try {
    if(editValue === '') {
      fetchTodo()
      return
    }

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: editValue.trim()
      })
    })

    if(response.status === 200){
      fetchTodo()
    }
    
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