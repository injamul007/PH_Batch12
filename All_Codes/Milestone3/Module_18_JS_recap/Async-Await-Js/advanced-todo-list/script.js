const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector(".addBtn");
const todoContainer = document.querySelector(".todoContainer");

const API = "https://6a0f2cad1736097c360b3d4c.mockapi.io/api/v1/advanceTodos";

addBtn.addEventListener("click", () => {
  const value = taskInput.value;
});

async function fetchData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();

    //? looping
    data.forEach(elem => {
      console.log(elem)
      const todoDiv = document.createElement('div')
      todoDiv.classList.add('todo')
      todoDiv.innerHTML = `<p>${elem.text}</p>
          <button>Edit</button>
          <button>Delete</button>`

      todoContainer.append(todoDiv)
    });
  } catch (error) {
    console.log(error)
  }
}

fetchData(API);