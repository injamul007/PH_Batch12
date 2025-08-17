//? Problem-2

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return "Invalid Input"
  }
  if (string1.includes(string2)) {
    return true;
  }
  return false;
}

const result = matchFinder(4, "Pet");
console.log(result)