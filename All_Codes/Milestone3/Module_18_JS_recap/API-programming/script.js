//? JSON -> JavaScript Object Notation
//? .json -> strict
//? double quotes (key,value)
//? string, number, null, boolean, object, array <- it can hold these
//? function , date and undefined <- it cannot hold these

// const json = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   }
// ];

// console.log(typeof JSON.stringify(json))
// const jsonString = JSON.stringify(json);
// console.log(jsonString);
// console.log(typeof jsonString);
// console.log(JSON.parse(jsonString));
// console.log(typeof JSON.parse(jsonString));
// console.log(json[0].address.city )

//? API - Application Programming Interface
//? Application Programming Interface - it is a set of rules and protocols that allows different software applications to communicate and interact with each other


// async function fetchData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
//   const res = await response.json()

//   console.log(res)
// }

// fetchData()