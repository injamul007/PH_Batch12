//? Max from 3 numbers

const jim = 88;
const tim = 89;
const kim = 68;

// if(jim > tim && jim > kim) {
//   console.log('Jim is the ultimate boss')
// } else if (tim > jim && tim > kim) {
//   console.log("Tim is the big boss here")
// } else {
//   console.log("kim is the real boss here")
// }

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + ' Num1 is max here';
  } else if (num2 > num1 && num2 > num3) {
    return num2 + ' Num2 is max here';
  }
  return num3 + ' Num3 is max here'
}

console.log(maxOfThree(280,190,99));