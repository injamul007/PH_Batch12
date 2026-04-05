const url = "https://dummyjson.com/todos";

const todoDivContainer = document.querySelector("#todos");

const renderTodos = (todos) => {
  todoDivContainer.innerHTML = "";
  todos.forEach((todo) => {
    const divElem = document.createElement("div");
    divElem.className =
      "bg-white p-4 rounded shadow flex justify-between items-center";

    divElem.innerHTML = `<span>${todo.todo}</span> <span class='text-sm p-2 rounded ${todo.completed === true ? "text-green-600" : "text-red-600"}'>${todo.completed === true ? "completed" : "not completed"}</span>`;

    todoDivContainer.append(divElem);
  });
};

const getTodosThen = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderTodos(data.todos))
    .catch((err) => console.log(err));
};

const getTodosAsync = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderTodos(data.todos);
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: "Use DummyJSON in the project",
        completed: false,
        userId: 5,
      }),
    });
    const data = await res.json();
    renderTodos([data])
  } catch (error) {
    console.log(error)
  }
};


const updateTodo = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: false,
      }),
    });
    const data = await res.json();
    renderTodos([data])
  } catch (error) {
    console.log(error)
  }
};


const deleteTodo = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos/1", {
      method: "DELETE",
    });
    const data = await res.json();
    renderTodos([data])
  } catch (error) {
    console.log(error)
  }
};