//?  functions

//? qna

//? Q1.Write a regular function that takes a string and returns it with the first letter capitalized !

// function capitalizeFirstLetter(str) {
//   console.log(str.charAt(0).toUpperCase() + str.slice(1));
// }

// capitalizeFirstLetter("boss");


//? Q2. Show an alert message that says "Please Login" after 5 seconds on your website !

// setTimeout(() => {
//  alert('Please Login');
// }, 5000);

//? Q3. Make an arrow function that takes a price and a discount, and returns the price after discount.

// let calculatedDiscountPrice = (price,discount) => {
//   let priceDiscount = price * (discount /100);
//   let priceAfterDiscount = price - priceDiscount;
//   return priceAfterDiscount;
// }

// console.log(calculatedDiscountPrice(1035,15));

//? Q4. Create a function that builds a userName from a full name.

// function generateUsername (fullName) {
//   return "@" + fullName.trim().replaceAll(' ',"") + fullName.length;
// }

// console.log(generateUsername('boss Will Be Boss'));


//? Q5. Write a function that takes a traffic light color and gives the correct instruction (like- green,red,yellow);

// let color = prompt('Enter the color(Red,Green,yellow)');

// function trafficLight (color) {
//   if(!color) {
//     alert('Please give a valid traffic color');
//   } else if (color === 'red') {
//     alert('You have to stop the car');
//   } else if (color === 'yellow') {
//     alert('You have to wait little more');
//   } else if (color === 'green') {
//     alert('You can go now');
//   } else {
//     alert('Please give a valid traffic color')
//   }
// }

// trafficLight(color);


function capitalizeFirstLetter(str) {
  const fLetter =  str.split("")[0].toUpperCase();
  // const fLetter =  str.charAt().toUpperCase();
  const restOfTheLetters = str.slice(1)
  return  fLetter + restOfTheLetters
}

const f = capitalizeFirstLetter("tonmoy hoque")
// console.log(f)

let strr = "hello"

// console.log(strr.split(""))
// console.log(['h','e','l','l','o'][0])

// setTimeout(()=> {alert('Please Login')},5000)

// const calculateDiscountedPrice = (price, discount)=> {
//   const discountedPrice = price * discount/100
//   return price - discountedPrice
// }

// const dis = calculateDiscountedPrice(1550,15)
// console.log(dis)

const generateUsername = (fullname)=> {
  const sliceName = fullname.trim().replaceAll(" ", "")
  const fullnameLength = fullname.length
  const gNumbers = Math.floor(Math.random() * 100) + 1
  return "@" + sliceName + fullnameLength + gNumbers
}

const result = generateUsername('injamul hoque tonmoy')
console.log(result)