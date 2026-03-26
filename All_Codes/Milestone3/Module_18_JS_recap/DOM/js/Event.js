// const firstBtn = document.querySelector('.firstBtn')

// console.log(firstBtn)

//? property method event listener
// firstBtn.onclick = ()=> {console.log('btn clicked')}

// firstBtn.onclick = ()=> {console.log('btn clicked twice')}

//? Add Event Listener Method

// firstBtn.addEventListener("click", ()=> {
//   console.log('added event listener')
// })

// const showConsole = () => {
//   console.log('this is event listener')
// }

// firstBtn.addEventListener("click", showConsole)

// firstBtn.removeEventListener('click', showConsole)


// const plusBtn = document.querySelector('.plusBtn')
// const minusBtn = document.querySelector('.minusBtn')
// const displayCount = document.querySelector('.displayCount')

// displayCount.addEventListener('mouseenter', (event) => {
//   console.log('mouse pointer just enter in the box', event)
// })

// displayCount.addEventListener('mouseleave', (event) => {
//   console.log('mouse pointer just leave from the box', event)
// })

// displayCount.addEventListener('mouseover', (event) => {
//   console.log('mouse pointer just leave from the box', event)
// })

// let count = displayCount.innerHTML

// plusBtn.addEventListener("click", () => {
//   displayCount.innerHTML = Number(displayCount.innerHTML) + 1
// })

// minusBtn.addEventListener("click", () => {
//   if(Number(displayCount.innerHTML) <= 0) {
//     return
//   }
//   displayCount.innerHTML = Number(displayCount.innerHTML) - 1
// })


// const input = document.querySelector('.input')

// input.addEventListener("input", () => {
//   console.log(input.value)
// })

// input.addEventListener("change", () => {
//   console.log(input.value)
// })


// window.addEventListener('load', () => {
//   console.log('loaded the window')
// })

// window.addEventListener('resize', () => {
//   console.log('window is resized')
// })

// window.addEventListener('scroll', () => {
//   console.log('window is scrolling')
// })

// const h2 = document.querySelector('h2')

// h2.addEventListener('copy', () => {
//   console.log(window.getSelection().toString())
// })


const form = document.querySelector('.form')
const textInput = document.querySelector('.textInput')
const submitBtn = document.querySelector('.submitBtn')
const body = document.querySelector('body')

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if(!textInput.value) {
    console.log('your input is empty')
    return
  }
  const div = document.createElement('div')
  div.innerHTML = `<p>${textInput.value}</p>`
  body.append(div)
  console.log(textInput.value)
})