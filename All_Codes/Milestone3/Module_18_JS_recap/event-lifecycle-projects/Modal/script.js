const modalOpenBtn = document.querySelector('.openModalBtn')
modalContainer = document.querySelector('.modalContainer')


modalOpenBtn.addEventListener('click', ()=> {
  modalContainer.style.display = 'flex'
})


modalContainer.addEventListener('click', (e)=> {
  const targetElem = e.target;
  if(targetElem.className === 'closeModalBtn') {
    modalContainer.style.display = 'none'
  }
  if(targetElem.className === 'modalContainer') {
    modalContainer.style.display = 'none'
  }
})