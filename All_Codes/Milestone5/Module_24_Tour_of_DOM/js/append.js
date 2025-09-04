//?

// console.log('append file connected')

//? Parent Node
const mainContainer = document.getElementById('main_container');
// console.log(mainContainer)

//? create child Node
const placeSection = document.createElement('section');
placeSection.style.backgroundColor = 'gold'

//? Append placesSection to the Main container
mainContainer.appendChild(placeSection);

//? create more element 

const h1New = document.createElement('h1');
h1New.innerText = 'The places i want to go';
h1New.style.color = 'green';

//? append h1 to the section
placeSection.appendChild(h1New);

//? create more element 
const ulList =  document.createElement('ul');


//? append ul to the section
placeSection.appendChild(ulList);

//? create list element
const li1 = document.createElement('li');
li1.innerText = 'Japan'
li1.style.backgroundColor = 'blue'
li1.style.color = 'white'

const li2 = document.createElement('li');
li2.innerText = 'America';
const li3 = document.createElement('li');
li3.innerText = 'Norway';
const li4 = document.createElement('li');
li4.innerText = 'Finland';

//? append li to the ul
ulList.appendChild(li1)
ulList.appendChild(li2)
ulList.appendChild(li3)
ulList.appendChild(li4)


//? Easier to create HTML in DOM
const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1 class = "bg_teal">The Books i read most</h1> <ul> 
    <li>Crime Books</li>
    <li>Triller Books</li>
    <li>Philosophy Books</li>
</ul>`;

mainContainer.appendChild(booksSection);