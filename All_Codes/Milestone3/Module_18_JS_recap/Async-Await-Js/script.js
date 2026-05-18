//? Synchronous vs Asynchronous

// console.log("task 1");
// console.log("task 2");
// setTimeout(() => {
//   console.log("task 3 = async task");
// }, 5000);
// console.log("task 4");
// for(let i = 1; i < 200000; i++){
//   console.log('task 5', i)
// }
// console.log("task 6");

// setTimeout(() => {
//   console.log('cloths are washing in the washing machine')
// }, 7000);

// setTimeout(() => {
//   console.log('rice are cooking in the stove')
// }, 3000);

// setTimeout(() => {
//   console.log('chicken are cooking in the stove')
// }, 6000);


//?   Feature -->          Synchronous        vs    Asynchronous
//?   Execution Flow -->   Line by line       vs    Skip long task,comes back 
//?   Blocking       -->   Yes                vs    No
//?   Use Cases      -->   Simple tasks,      vs    API calls, DB queries,
//?                         calculation             timers 


// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const resultData = await response.json()
//   console.log(resultData)
// }

// fetchData()

// console.log('hello')
// console.log('how are you?')