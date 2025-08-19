//? Problem-1

function cashOut(money) {
// You have to write your code here
if (money < 0 || typeof money !== 'number') {
  return "Invalid";
}
let charge = money * 1.75 / 100;
return charge;
}

console.log(cashOut(2000));
console.log(cashOut(100));
console.log(cashOut(999));
console.log(cashOut(-350));
console.log(cashOut(0));
console.log(cashOut('101'));
console.log(cashOut('mewauu'));