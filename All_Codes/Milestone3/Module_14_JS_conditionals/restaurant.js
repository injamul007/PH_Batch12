//?

const age = 46;
const foodPrice = 1200;

if (age <= 12) {
  console.log("you can eat for free");
} else if (age >= 60) {
  //? 50% discount
  const discount = foodPrice * 50 / 100;
  const payAmount = foodPrice - discount;
  console.log("You have to pay 50% which is :", payAmount);
} else if (age >= 50 && age <= 59) {
  //? 30% discount
  const discount = foodPrice * 30 / 100;
  const payAmount = foodPrice - discount;
  console.log("You have to pay 30% which is :", payAmount);
} else if (age >= 40 && age <= 49) {
  //? 10% discount
  const discount = foodPrice * 10 / 100;
  const payAmount = foodPrice - discount;
  console.log("You have to pay 10% which is :", payAmount);
} else{
  console.log("You have to pay full amount :", foodPrice);
}


// if (age <= 12) {
//   console.log("you don't have to pay for eating food")
// } else if (age >= 60) {
//   console.log("You have to pay 50%")
// } else if (age > 12 && age < 60) {
//   console.log("You have to pay full amount")
// }