//? Problem-5

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "You have no Money"
  }
  let result = 0;
  for (elem of changeArray) {
    result += elem
  }
  return result >= totalDue;
}


const chipsPrice = canPay([], 10);
console.log(chipsPrice)