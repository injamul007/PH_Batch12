//? find the max number in an array

function getMax(arr) {
  let arrIndex = arr[0];
  for (const el of arr) {
    if (el > arrIndex) {
      arrIndex = el;
    }
  }
  return arrIndex;
  // const maxNumber = Math.max(...arr);
  // return maxNumber
}

console.log(getMax([65,66,68,72,78,60,97]));