//? await in js


async function loadData() {
  console.log('one')
  console.log('two')
  //? Asynchronous
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res => res.json())
  // .then(data => console.log('data got three'))
  // .catch(err => console.log(err))

  //? Synchronous
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log('data got three')
  console.log('four')
  console.log('five')
}

// loadData();

const loadData2 = async () => {
  console.log(1)
  console.log(2)
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data.length);
  } catch (error) {
    console.log('error happened')
  }
  console.log(4)
  console.log(5)
}

console.log(loadData2())