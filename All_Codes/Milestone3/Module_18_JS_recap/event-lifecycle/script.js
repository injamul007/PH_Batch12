// const grandParent = document.querySelector(".grand-parent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // grandParent.addEventListener('click', ()=>{
// //   console.log('grand parent click is working fine')
// // })

// // grandParent.addEventListener('click', ()=>{
// //   console.log('grand parent click is working fine')
// // }, true)

// // parent.addEventListener('click', ()=>{
// //   console.log('parent click is working fine')
// // })

// // parent.addEventListener('click', ()=>{
// //   console.log('parent click is working fine')
// // }, true)

// // child.addEventListener('click', ()=>{
// //   console.log('child click is working fine')
// // })

// // child.addEventListener('click', ()=>{
// //   console.log('child click is working fine')
// // }, true)

// // grandParent.addEventListener("click", (e) => {
// //   // e.stopPropagation()
// //   console.log(e.target);
// //   console.log("grand parent");
// //   console.log(e.currentTarget);
// // });

// // parent.addEventListener("click", (e) => {
// //   // parent.style.backgroundColor = 'red'
// //   // e.stopPropagation()
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// //   console.log("parent");
// // });

// // child.addEventListener("click", (e) => {
// //   // e.stopPropagation()
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// //   // e.stopImmediatePropagation()
// //   console.log("child");
// // });



// grandParent.addEventListener('click', (e)=>{
//   console.log('grand parent')
//   // e.stopPropagation()
// })

// parent.addEventListener('click', (e)=>{
//   console.log('1st parent')
//   // e.stopPropagation()
//   e.stopImmediatePropagation()
// })

// parent.addEventListener('click', ()=>{
//   console.log('2nd parent')
//   // e.stopPropagation()
// })

// parent.addEventListener('click', ()=>{
//   console.log('3rd parent')
//   // e.stopPropagation()
// })

// child.addEventListener('click', (e)=>{
//   console.log('child')
//   // e.stopPropagation()
// })




const divContainer = document.querySelector('.container')

divContainer.addEventListener("click", (e)=> {
  const targetElem = e.target;
  if(targetElem.className === 'box') {
    console.log(targetElem.innerText)
  }
})

