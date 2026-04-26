//? Ques no 34: How would you toggle a class on an element when another element is clicked (e.g., show/hide sidebar)


const toggleBtn = document.querySelector('button')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', ()=> {
  sidebar.classList.toggle('showSidebar')
})