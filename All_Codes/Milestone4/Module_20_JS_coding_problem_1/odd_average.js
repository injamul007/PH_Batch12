//? Odd Average in an array
/**
 * ? function takes an array as parameter
 * ? give me the average of the odd numbers in the array
 * ? Put all the odd numbers in an array
 */


function oddAverage(arr) {
  let sumOfOdds = 0;
  let newOddArr = [];
  for (const el of arr) {
    if (el % 2 !== 0) {
      newOddArr.push(el);
      sumOfOdds += el;
    }
  }
  if (newOddArr.length === 0) {
    return 'No odd numbers available';
  }
  console.log('Sum of all Odds :',sumOfOdds)
  return (sumOfOdds / newOddArr.length).toFixed(1);
}

// console.log("Average of the odd number is: ",oddAverage([2,3,13,27,28,30,33,47]));
// console.log("Average of the odd number is: ",Number(oddAverage([2,7,13,28,29,30,33,47,57,63])));
console.log("Average of the odd number is: ",Number(oddAverage([42,13,58,65,81,96,7,105])));
// console.log("Average of the odd number is: ",oddAverage([2,28,30]));