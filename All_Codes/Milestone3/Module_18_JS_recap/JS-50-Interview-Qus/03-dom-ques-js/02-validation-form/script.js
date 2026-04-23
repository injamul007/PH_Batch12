//? JS - Intermediate Question from 31 - 36

//?  Ques No 32: How can you update the DOM based on user input in real-time (e.g., live preview of a form)?

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const nameError = document.querySelector('.nameError')
const emailError = document.querySelector('.emailError')
const passwordError = document.querySelector('.passwordError')


const handleEvent = (e) => {
  let targetValue = e.target.value
  if(targetValue === nameInput.value) {
    if(targetValue.length <= 3) {
      nameError.innerText = 'Name must be at least 4 characters long'
    } else {
      nameError.innerText = ''
    }
  } else if (targetValue === emailInput.value) {
    if(targetValue.length <= 6) {
      emailError.innerText = 'Email must be at least 7 characters long'
    } else if (!targetValue.includes('@')) {
      emailError.innerText = 'Email is Invalid'
    }  else if(!targetValue.includes('.')) {
      emailError.innerText = 'Email is Invalid'
    } else if(!targetValue.includes('com')) {
      emailError.innerText = 'Email is Invalid'
    } else {
      emailError.innerText = ''
    }
  } else {
    if(targetValue.length < 8) {
      passwordError.innerText = 'Password must be at least 8 characters long'
    } else if (!targetValue.includes('A') || !targetValue.includes('B')) {
      passwordError.innerText = 'email must need "One Capital Alphabet" '
    }  else if(!targetValue.includes('.')) {
      passwordError.innerText = 'email must need "." '
    } else if(!targetValue.includes('com')) {
      passwordError.innerText = 'email must need "com" '
    } else {
      passwordError.innerText = ''
    }
  }
}

nameInput.addEventListener('input', handleEvent)
emailInput.addEventListener('input', handleEvent)
passwordInput.addEventListener('input', handleEvent)