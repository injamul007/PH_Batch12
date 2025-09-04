//?
//? create an element and set innerText or innerHTML 
const newLi = document.createElement('li');
// console.log(newLi)
newLi.innerText = 'Mothers handmade food';


//? find the parent where you will add the child
const foodList = document.getElementById('food_list');
// console.log(foodList)
//? Append the child element to the parent !!
foodList.appendChild(newLi); //? appendChild is for add anything inside of the parent element
console.log(foodList)