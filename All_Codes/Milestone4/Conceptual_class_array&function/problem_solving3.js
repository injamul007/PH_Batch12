//? Problem-3

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input"
  }else if (arr[0] === arr[1]) {
    return "equal"
  }
  arr.sort(function(a,b) {return b-a})
  return arr;
}

const arrResult = sortMaker([-2,2])

console.log(arrResult)