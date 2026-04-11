const listContainer = document.querySelector('.listContainer')

listContainer.addEventListener('click', (e)=> {
  targetElem = e.target
  if(targetElem.classList.contains('listItem')) {
    targetElem.style.textDecoration = 'line-through'
  }
})