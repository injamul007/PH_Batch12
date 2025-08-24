//? remove duplicate element from an array

const biryaniKhor = ['abul','babul','cabul','abul','babul','dabul','kabul','cabul'];

// const numbers = [1,5,61,5,87,7,1,81,61];

// function removeDuplicate (arr) {
//   const removeDuplicateFromArr = [...new Set(arr)];
//   return removeDuplicateFromArr;
// }

function removeDuplicate(arr) {
  let removeDupArr = [];
  for (const el of arr) {
    if (!removeDupArr.includes(el)) {
      removeDupArr.push(el);
    }
  }
  return removeDupArr;
}

console.log(removeDuplicate([1,5,61,5,87,7,1,81,61]));
// console.log(removeDuplicate([1,2,3,4,1,2,3,4]));
// console.log(removeDuplicate(biryaniKhor));