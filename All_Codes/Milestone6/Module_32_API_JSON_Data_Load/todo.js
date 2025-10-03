//? Todos API calling and display it using UI

const loadTodo = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
  .then(res => res.json())
  .then(jsonTodo => displayTodo(jsonTodo))
}

loadTodo()


const displayTodo = (todos) => {
  //? 1. get the container with id
  const todoContainer = document.getElementById('todo_container');
  todoContainer.innerHTML = '';
  todos.forEach(todo => {
    //?2. create div element
    const todoCard = document.createElement('div');
    todoCard.innerHTML = `<div class="todoCard">
    <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
      <h4>TodoName: ${todo.title}</h4>
    </div>`;
    todoContainer.append(todoCard);
  });
}