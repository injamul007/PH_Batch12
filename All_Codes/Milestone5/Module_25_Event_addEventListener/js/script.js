//?

const mainDiv = document.querySelector(".item_list");
const items = document.querySelectorAll(".item");
const buttons = document.querySelectorAll("button");
const inputTask = document.querySelector("#inputTask");
const AddTaskBtn = document.querySelector(".add_btn");
const newLi = document.createElement("li");

AddTaskBtn.addEventListener("click", function (e) {
  // e.preventDefault();
  let inputName = inputTask.value;
  newLi.innerHTML += `<li>${inputName} <button>Delete</button></li>`;
  inputTask.value = "";
  mainDiv.append(newLi);
});

// for (const item of items) {
//   item.addEventListener('click', function(event) {
//     item.parentNode.removeChild(event.target);
//   })
// }

for (const btn of buttons) {
  btn.addEventListener("click", function (event) {
    btn.parentNode.remove(event.target);
  });
}


mainDiv.addEventListener('click', function(event) {
  console.log(event.target)
  event.target.parentNode.removeChild(event.target)
  
})