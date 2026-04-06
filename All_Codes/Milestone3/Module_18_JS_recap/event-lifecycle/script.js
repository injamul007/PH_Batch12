const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


grandParent.addEventListener('click', ()=>{
  console.log('grand parent click is working fine')
}, true)

parent.addEventListener('click', ()=>{
  console.log('parent click is working fine')
}, true)

child.addEventListener('click', ()=>{
  console.log('child click is working fine')
}, true)