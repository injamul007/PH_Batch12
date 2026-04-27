//? Ques no 35: create a Show / hide password toggle


const button = document.querySelector('button')
const passwordInput = document.querySelector('#password')


button.addEventListener('click', ()=> {
  if(passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text')
    button.textContent = 'hide password'
  } else {
    passwordInput.setAttribute('type', 'password')
    button.textContent = 'show password'
  }
})