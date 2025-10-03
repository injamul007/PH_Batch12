//? All about API recap and new things explore

// async function loadData() {
//   const api = 'https://jsonplaceholder.typicode.com/todos/1';
//   const res = await fetch(api);
//   const data = await res.json();
//   console.log(data)
// }

// loadData();

//? Asyncronous javascript 
//? this will work like syncronous javascript way !! to keep the work flow equal and balance

const dataLoad = async () => {
  const api = 'https://jsonplaceholder.typicode.com/todos/1';
  const res = await fetch(api);
  console.log('Hello')
  const data = await res.json();
  console.log(data)
  console.log(true)
}

dataLoad()