//? Argument in JS

function add(a,b) {
  // console.log(a,b)
  console.log(arguments)
  const params = [...arguments]
  console.log(params.forEach(el => console.log(el)))
}

add(88,99,5,3,676)