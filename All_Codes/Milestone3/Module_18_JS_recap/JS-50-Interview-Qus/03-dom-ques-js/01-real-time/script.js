//? JS - Intermediate Question from 31 - 36

//?  Ques No 31: How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const nameValue = document.querySelector('.nameValue')
const emailValue = document.querySelector('.emailValue')

const handleEvent = (e) => {
  if(e.target.value === nameInput.value) {
    nameValue.innerText = e.target.value
  } else {
    emailValue.innerText = e.target.value 
  }
}

nameInput.addEventListener('input', handleEvent)
emailInput.addEventListener('input', handleEvent)