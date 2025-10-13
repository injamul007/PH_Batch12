//?

const person = {
  name: 'Boss',
  age: 32,
  friends: ['BD','US','UK'],
  family: {
    fatherName: 'BigBoss',
    motherName: 'BigMom',
  },
};

const keys = Object.keys(person)
const values = Object.values(person)
// values.forEach(el => console.log(el))
const entries = Object.entries(person)
// entries.forEach(el => console.log(el))
// console.log(keys)
// console.log(values)
// console.log(entries)

// console.log(person)

// const jsonData = JSON.stringify(person)

// console.log(jsonData)

// const jsonDataObj = JSON.parse(jsonData);

// console.log(jsonDataObj)

//?! Fetch 

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))



const products = [
  {name:'redmi',brand:'xiaomi',price: 3000, color: 'black'},
  {name:'galaxyS8',brand:'samsung',price: 4000, color: 'white'},
  {name:'iris8',brand:'lava',price: 5000, color: 'orange'},
  {name:'Moto-G5',brand:'motorola',price: 6000, color: 'black'},
  {name:'x-t',brand:'t-mobile',price: 7000, color: 'blue'},
  {name:'A5',brand:'oppo',price: 8000, color: 'black'},
]

const newArrayOfObj = [...products,{name:'walton',brand:'relax',price: 18000, color: 'pinky'}]

// console.log(newArrayOfObj)

// const newArrObj = products.map(el => {
//   // console.log(el.name)
//   const {name,brand,price,color} = el
// })


//?