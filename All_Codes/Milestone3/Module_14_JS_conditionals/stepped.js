/** 
 *  Multi-label condition
 */


const price = 2600;

if (price >= 5000) {
  //? 10% discount
  const discount = price * 10 / 100;
  const payAmount = price - discount; 
  console.log("Discount Amount : ",discount);
  console.log("Pay Amount : ",payAmount);
} else if (price > 2500) {
  //? 5% discount
  const discount = price * 5 / 100;
  console.log("Discount Amount : ",discount);
  const payAmount = price - discount; 
  console.log("Pay Amount : ",payAmount);
} else {
  console.log("apni kono discount pan ni ")
}

