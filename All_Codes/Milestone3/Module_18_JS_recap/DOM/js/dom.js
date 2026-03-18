// //?

// const onBtn = document.getElementById('on_btn');
// const offBtn = document.getElementById('off_btn');
// const pElement = document.querySelector('p');

// onBtn.addEventListener('click', function() {
//   pElement.style.transform = 'rotate(360deg)';
//   pElement.style.backgroundColor = 'yellow';
// });


// offBtn.addEventListener('click', function() {
//   pElement.style.transform = 'rotate(0deg)';
//   pElement.style.backgroundColor = 'green';
// });

// // console.log(window)

// const sectionContainer = document.querySelector('section');

// console.log(sectionContainer.childNodes);

// const h3 = document.querySelector('h3');

// console.log(h3.tagName)
// console.log(h3.nodeName)
// console.log(h3.childNodes)
// console.log(h3.innerText)
// console.log(h3.textContent)
// console.log(h3.innerHTML)


// const pTag = document.querySelector('p')
// console.log(pTag.innerText = 'my name is \nking khan')
// console.log(pTag.innerHTML = '<span>My name is bulla</span>')


// const h1 = document.querySelector("h1")

// h1.style.backgroundColor = 'green'


// const h1 = document.querySelector("h1")

// h1.addEventListener('click', ()=>{
//   h1.style.backgroundColor = "blue"
//   h1.style.color = 'black'
// })


const btn = document.querySelector('button')
const box = document.querySelector("p")

btn.addEventListener("click", () => {
  if(btn.innerText === 'Expand') {
    btn.innerText = "Shrink"
    box.style.backgroundColor = 'green'
    box.style.scale = '1'
  } else {
    btn.innerText = "Expand"
    box.style.backgroundColor = 'red'
    box.style.scale = '0.8'
  }
})


// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if(btn.innerText === "ON") {
//       box.style.backgroundColor = 'blue'
//       box.style.transform = 'rotate'
//     } else {
//       box.style.backgroundColor = 'brown'
//     }
//   })
// })