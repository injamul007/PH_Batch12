//?

function calculator(num1, num2, sign) {
  if ( sign === '+') {
    return num1 + num2;
  } else if (sign === '-') {
    return num1 - num2;
  } else if (sign === '*') {
    return num1 * num2
  } else if (sign === '/') {
    return num1 / num2
  }
}

// console.log(add(3,5, '/'))


function add(num1, num2) {
  console.log(num1, num2);
  // arguments + arguments
  // let sum = 0;
  // for (el of arguments) {
    // if (el % 2 === 0) {
    //   console.log(el)
    // }
    // console.log(el)
    // sum += el
  // }
  // console.log(sum)
  // console.log(arguments[3]); //? not exact an array but it looks array like object !! and this only can access in function !!
}

add(12,13,45,89,78);