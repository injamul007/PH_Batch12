/**
 * ? chair --> 3 cft
 * ? table --> 10cft
 * ? bed --> 50cft
 */


function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  return chairTotalWood + tableTotalWood + bedTotalWood;
}

// console.log(woodCalculator(4,2,2));


function dressPrice(shirt, pant, shoe) {
  const shirtPerPrice = 500;
  const pantPerPrice = 700;
  const shoePairPrice = 1200;

  const totalShirtPrice = shirt * shirtPerPrice;
  const totalPantPrice = pant * pantPerPrice;
  const totalShoePrice = shoe * shoePairPrice;

  const result = totalShirtPrice + totalPantPrice + totalShoePrice;

  return result;
}

console.log('Total Dress Price :',dressPrice(4,3,2));