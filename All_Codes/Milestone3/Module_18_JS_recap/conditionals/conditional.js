//? Conditionals

//? to check if a product is in stock or not

// let productInStock = 2;

// if (productInStock === 0) {
//   console.log("product is out of stock");
// } else {
//   console.log("product is in stock");
// }

//? Grade calculator to check student marks value 

// let yourMarks = parseInt(prompt("Enter your marks"));

// if(yourMarks < 0 || yourMarks >= 101 || isNaN(yourMarks)) {
//   console.log(yourMarks, "Your Marks is Invalid");
// } else if (yourMarks >= 80 && yourMarks <= 100) {
//   console.log(yourMarks, "Your Grade is = A+");
// } else if (yourMarks >= 70 && yourMarks <= 79) {
//   console.log(yourMarks, "Your Grade is = A");
// } else if (yourMarks >= 60 && yourMarks <= 69) {
//   console.log(yourMarks, "Your Grade is = A-");
// } else if (yourMarks >= 50 && yourMarks <= 59) {
//   console.log(yourMarks, "Your Grade is = B");
// } else if (yourMarks >= 40 && yourMarks <= 49) {
//   console.log(yourMarks, "Your Grade is = C");
// } else if (yourMarks >= 34 && yourMarks <= 39) {
//   console.log(yourMarks, "Your Grade is = D");
// } else {
//   console.log("Your Marks = ", yourMarks, " You Need to study more and more");
// }


//? Switch case 

// let color = "green";

// switch(color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "Yellow":
//     console.log("wait");
//     break;
//   case "green":
//     console.log("drive")
//     break;
// };



// //? leap year !

// let year = Number(prompt('Enter a Year'));

// if (!year || isNaN(year) || year <= 1000) {
//     alert('Please give a valid Year');
// } else if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year, " is a Leap year");
// } else {
//     console.log(year, " is not a Leap year");
// };


//? nullish coercing operator
const result = null ?? "mkl"
console.log(result)