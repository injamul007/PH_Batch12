//? Task-2

function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    return 'Invalid';
  }
  let sum = 0;
  for (const num of arr) {
    if (typeof num !== 'number') {
      return 'Invalid';
    }
    sum += num;
  }
  return sum;
}

console.log(sumOfArray([1,2,3]))
console.log(sumOfArray([3,7,8]))
console.log(sumOfArray([3,5,'eksho', 3]))
console.log(sumOfArray(10))