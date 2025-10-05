//? promise in js

const getData = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    if (num > 5) {
      resolve({num: num});
    } else {
      reject({num: num, err: 'number is less than 5'})
    }
})

// getData.then(data => console.log('data 1', data))
// .catch(err => console.log(err,'data is not available'))
