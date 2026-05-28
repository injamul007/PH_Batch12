//? so promise is a constructor function so you have to declare it with new keyword

// const p1 = new Promise((resolve, reject) => {
//   resolve({
//     name: "boss",
//   });
//   reject('something went wrong')
// });

// console.log(
//   p1
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     }),
// );

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: "Boss",
//     });
//   }, 3000);
// });

// console.log(
//   p1.then((res) => console.log(res)).catch((err) => console.log(err)),
// );

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value: "resolve Samsung Phone S22",
//       });
//     }, 3000);
//   });
// }

// function fetchData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value: "resolve Samsung Phone S23",
//       });
//     }, 4000);
//   });
// }

// fetchData()
//   .then((res) => {
//     console.log(res);
//     return fetchData2();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



