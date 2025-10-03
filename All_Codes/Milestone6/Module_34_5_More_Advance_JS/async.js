//? Asynchronous vs Synchronous In JS

console.log('one')
console.log('two')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(rest => rest.json())
// .then(data => console.log(data));

// setTimeout(callThree, 3000)
setTimeout(() => {
  console.log('new three in town')
}, 3000);

console.log('four')
console.log('five')

function callThree() {
  console.log('three')
}

