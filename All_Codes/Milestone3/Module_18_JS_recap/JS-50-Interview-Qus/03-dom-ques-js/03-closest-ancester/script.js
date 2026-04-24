

//? DOM Ques 31-36

//? Ques no 33. find the closest ancestor in an element that matches a selector

const child = document.querySelector('#child')

child.addEventListener('click', (e)=> {
  console.log(e.target.closest('.parent'))
})