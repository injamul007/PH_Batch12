//? Ternary Operator

/** 
 *    TERNARY ---> Three Parts.....
 * 
 *  ?  (condition) ? "do something when true" : "do      something when false";
 */

// const age = 25;

//? Normal If-else

// if (age >= 18) {
//   console.log('You can vote !')
// } else {
//   console.log("Jao baccha Ghumay thako");
// }

// const TernaryOutput = (age >= 18) ? "Tumi vote dao" : "tomar voter boyosh hoy nai";

// console.log(TernaryOutput);

//? simple ternary

// (age >= 18) ? console.log("Vote dio") : console.log("ghumay thako");


let price = 1200;
const isLeader = true;

if (isLeader === true) {
  // price = 0;
} else {
  // price += 100;
}
// console.log(price)

// price = (isLeader === true) ? 0 : price += 100;

// console.log(price);


//? semi advanced ternary

// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2
//     console.log(price);
//   } else {
//     price = 0;
//     console.log(price)
//   }
// } else {
//   price += 100;
// }

price = isLeader === true ? (price > 1000) ? price = price / 2 : price = 0 : price += 100;

console.log(price);