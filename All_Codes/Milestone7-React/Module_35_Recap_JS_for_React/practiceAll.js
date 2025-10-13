//?

const sum = (...rest) => { //? this method turns arrow functions parameters into an array
  // console.log(rest)
  return rest;
}

// const output = sum(1,2,3).forEach(element => {
//   console.log(element)
// });

const products = [
  {name:'redmi',brand:'xiaomi',price: 3000, color: 'black'},
  {name:'galaxyS8',brand:'samsung',price: 4000, color: 'white'},
  {name:'iris8',brand:'lava',price: 5000, color: 'orange'},
  {name:'Moto-G5',brand:'motorola',price: 6000, color: 'black'},
  {name:'x-t',brand:'t-mobile',price: 7000, color: 'blue'},
  {name:'A5',brand:'oppo',price: 8000, color: 'black'},
]

// const onlyBlack = products.filter(product => product.color === 'black')
const onlyBlack = products.filter(product => product.color.includes('black'))

// console.log(onlyBlack)

//? truthy / falsy value !!
//? with ternary

const test = ''

// test? console.log("it's truthy") : console.log("it's falsy")



const isActive = false;

const showUser= () => console.log('show user green')
const hideUser= () => console.log('hide user grey')

// isActive? showUser() : hideUser();


//? only single condition !! if true then show/do the task and if false don't do anything !

//? if the condition is true then && operator will work
// isActive && showUser()
//? if the condition is false then || operator will work
// isActive || hideUser()
// isActive && console.log('true')


const num = '10'

const result = num - 2

// console.log(result)