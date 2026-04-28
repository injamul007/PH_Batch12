//? Ques no 36: create a sticky header on scroll. the header becomes fixed to the top after scrolling down. (key concepts: scroll event, window.scrollY, classList.add/remove)


const navbar = document.querySelector('nav')

window.addEventListener('scroll', (e)=> {
  if(window.scrollY > 100) {
    navbar.classList.add('stick')
  } else {
    navbar.classList.remove('stick')
  }
})