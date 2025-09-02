//? Problem-1

function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== 'number' || fare <= 0) {
    return "Invalid";
  }
  const surCharge = fare * (20 / 100);
  const extraServiceCharge = 30;
  const totalFineAmount = fare + surCharge + extraServiceCharge;
  return totalFineAmount;
}


console.log(totalFine(200));
console.log(totalFine(0));
console.log(totalFine(1));
console.log(totalFine([2]));
console.log(totalFine(50));
console.log(totalFine(552));
console.log(totalFine(-35));
console.log(totalFine("65"));
console.log(totalFine("Gorib tai ticket katinai"));
