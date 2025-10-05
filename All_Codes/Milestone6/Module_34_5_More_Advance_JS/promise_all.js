//? promise in js

const getData1 = new Promise((resolve, reject) => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    if (num1 > 5) {
      resolve({num1: num1});
    } else {
      reject({num1: num1, err: 'number is less than 5'})
    }
});

const getData2 = new Promise((resolve, reject) => {
    const num2 = Math.floor(Math.random() * 10) + 1;
    if (num2 > 5) {
      resolve({num2: num2});
    } else {
      reject({num2: num2, err: 'number is less than 5'})
    }
})

const getData3 = new Promise((resolve, reject) => {
    const num3 = Math.floor(Math.random() * 10) + 1;
    if (num3 > 5) {
      resolve({num3: num3});
    } else {
      reject({num3: num3, err: 'number is less than 5'})
    }
})

Promise.all([getData1, getData2, getData3])
.then(data => console.log(data))
.catch(err => console.log(err, 'reject only for one'))