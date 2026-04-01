const smallCursor = document.querySelector('.smallCursor')
const shadowCursor = document.querySelector('.shadowCursor')

document.addEventListener('mousemove', (eventObj)=> {
  smallCursor.style.left = eventObj.clientX + 'px'
  smallCursor.style.top = eventObj.clientY + 'px'
})