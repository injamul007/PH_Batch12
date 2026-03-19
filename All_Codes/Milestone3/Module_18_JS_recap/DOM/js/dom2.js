//?

// const divElem = document.querySelector('div');

// const pElement = document.createElement('p');

// pElement.innerText = 'new para4';

// divElem.append(pElement)
// divElem.prepend(pElement)
// divElem.after(pElement)
// divElem.before(pElement)

//? new adding element to parentNode !
// divElem.insertAdjacentElement('afterbegin', pElement);
// divElem.insertAdjacentElement('afterend', pElement);
// divElem.insertAdjacentElement('beforebegin', pElement);
// divElem.insertAdjacentElement('beforeend', pElement);

// const p = divElem.length-1
// console.log(p)
// p.remove()

// const divFirstPara = document.querySelector('div p');
// console.log(divFirstPara)

// const p2 = document.querySelector('.p2');

// p2.addEventListener('click', function() {
//   // p2.parentNode
//   // console.log(p2.parentNode.removeChild(divFirstPara));
//   const newPara = document.createElement('p');
//   newPara.innerText = 'im new para'
//   console.log(newPara)
//   console.log(p2.parentNode.appendChild(newPara));
// })
// p2.parentNode

// const addBtn = document.querySelector('.add_btn');
// const items = document.querySelectorAll('button');
// console.log(addBtn.innerHTML)
// console.log(items)
// const divElem = document.querySelector('div')
// const newP = document.createElement('p');
// newP.innerHTML = '<p>para4</p><button>Delete</button>';
// divElem.append(newP)
// for(const item of items) {
//     // console.log(item)
//     item.addEventListener('click', function(event) {
//       console.log(item.parentNode.removeChild(item));
//     });
//   };

// const divElem = document.querySelector('div')

// let divPara2 = divElem.children[1];

// let divPara3 = divElem.children[2]

// divElem.insertBefore(divPara3, divPara2)

// const divElem = document.querySelector('.div');
// console.log(divElem.getAttribute);
// console.log(divElem.attributes.title.value);
// console.log(divElem.attributes['class'].value);
// console.log(divElem.getAttribute('title'))
// const classValue = divElem.getAttribute('class');
// console.log(classValue)
// divElem.setAttribute('class', `${classValue} random`);
// console.log(newClassAdd)
// console.log(divElem.attributes.class.nodeValue)

//? task-1
// let newP = document.createElement('p');
// newP.innerText = "i don't like you";
// newP.style.backgroundColor = 'black';
// newP.style.color = 'green';
// newP.style.padding = '8px';

// divElem.append(newP)

// //? task-2

// let btn = document.createElement('button');
// btn.innerText = 'click me';

// newP.prepend(btn)

//? task-3

// let newDivElem = document.createElement('div')

// newDivElem.setAttribute('class', 'old_class');

// // console.log(newDivElem.attributes)

// newDivElem.style.backgroundColor = 'green';
// newDivElem.innerText = 'new div'

// document.body.append(newDivElem);
// let oldClassInDiv = newDivElem.getAttribute('class');
// newDivElem.setAttribute('class', `${oldClassInDiv} new_class`);

// console.log(newDivElem.attributes)

//? challenge-1

// const div = document.querySelector(".old");

// function changeTagName(oldNode, newTagName) {
//   let newElement = document.createElement(newTagName);
//   if (oldNode instanceof Element) {
//     newElement.innerText = oldNode.innerText;
//     for (const attr of oldNode.attributes) {
//       // console.log(attr)
//       newElement.setAttribute(attr.name, attr.value);
//       oldNode.replaceWith(newElement);
//     }
//   } else {
//     console.error("invalid node");
//   }
//   return newElement;
// }

// changeTagName(div, 'p')
// const catchReturn = changeTagName(div, "p");
// console.log(catchReturn, 'hello')
// console.log(changeTagName(div, 'p'));

// const h1 = document.createElement("h1");
// h1.innerText = "This is H1";
// h1.style.cssText = 'background-color: yellow; font-size: 30px; text-align: center'
// h1.setAttribute('style', 'background-color: red; font-size: 60px')
// h1.classList.add("bg_aqua_h1");
// h1.classList.add("font_size");
// h1.classList.add("text_center");
// h1.classList.remove('bg_aqua_h1')

// document.body.append(h1)

// const btn = document.querySelector('button');
// // const body = document.querySelector('body');
// btn.addEventListener('click', function() {
//   document.querySelector('body').classList.toggle('dark');
// })


// const btn = document.querySelector('button');

// let btnEvenFunction = function() {
//   console.log('click the btn')
// }

// btn.addEventListener('click', btnEvenFunction);

// btn.removeEventListener('click',btnEvenFunction)

//? Problem-1

// const incrementBtn = document.querySelector('.incre_btn')
// const decrementBtn = document.querySelector('.decre_btn')
// const counterValue = document.querySelector('.counter_value')

// function counterValueChange() {
//   // let count = 1;
//   let value;
//   incrementBtn.addEventListener('click', function() {
//     value = Number(counterValue.innerText);
//     counterValue.innerText = value + 1;
//   })
//   decrementBtn.addEventListener('click', function() {
//     value = Number(counterValue.innerText);
//     if(value <= 0) {
//       // counterValue.innerText = 0;
//       return;
//     }
//     counterValue.innerText = value - 1;
//   })
// }

// counterValueChange()


//? Problem-2

// let form = document.querySelector('form');
// let inputName = document.querySelector('#name');
// let inputEmail = document.querySelector('#email');
// let submitBtn = document.querySelector('.sub_btn');

// let pElement = document.createElement('p');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if (!(inputName.value) || !(inputEmail.value)) {
//     console.log('please fill all the details first');
//     return;
//   } else {
//     pElement.innerText +=  `Name: ${inputName.value}\n\n Email: ${inputEmail.value} \n \n`;
//     form.append(pElement);
//   }
// })



// console.log(document)

const node = document.querySelectorAll('div')
console.log(node)