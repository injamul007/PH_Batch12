//? problem-1

function cubeNumber(number) {
  if (typeof number !== 'number' || number < 0) {
    return 'Invalid Input'
  }
  const cube = number ** 3;
  return cube;
}

const result = cubeNumber(-1)
console.log(result)