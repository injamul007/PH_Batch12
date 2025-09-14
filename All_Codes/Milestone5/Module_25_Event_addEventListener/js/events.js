//?

// console.log('its freaking working')

//? Option 2 to handle event

function makeYellow() {
  // const btn = document.getElementsByTagName('button');
  // btn[3].style.backgroundColor = 'yellow';
  document.body.style.backgroundColor = "yellow";
}
// makeYellow()
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//? event handler by outside onclick -- option 3
const btnMakeBlue = document.getElementById("btn_make_blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

let btnPurple = document.getElementById("btn_make_purple");
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
btnPurple.onclick = makePurple;


//? Option 4 event handler by addEventListener

// document.getElementById('').addEventListener()
document.getElementById('green').addEventListener('click', () => {
  document.body.style.backgroundColor = 'green'
})

// let countClick = 0;
document.getElementById('gold').addEventListener('click', function (event) {
  countClick++;
  document.body.style.backgroundColor = 'gold';
  console.log('Background turns into gold color')
  console.log('event trigger', event.type)

  // if(countClick > 1) {
  //   console.log('more than one click')
  // }
})

// document.getElementById('gold').addEventListener('mouseout', function () {
//   document.body.style.backgroundColor = 'gold';
//   console.log('Background turns into gold color')
// })

// document.getElementById('gold').addEventListener('keydown', function (event) {
//   document.body.style.backgroundColor = 'gold';
//   console.log('key pressed', event.key)
// })

//? window event for load the when refresh page
// window.addEventListener('load', function() {
//   console.log("page fully loaded!!")
// })

const newBtn = document.getElementById('newBtn');

newBtn.addEventListener('click', function() {
  newBtn.innerText = 'Im New Now';
  newBtn.style.color = 'green'
})