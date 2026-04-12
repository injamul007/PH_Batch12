// console.log('connected')


//? Numbers in Javascript
// const num = 33;

// console.log(Number(num.toFixed(2)))



// const num = new Number('33')

// console.log(num)

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)


// const num = 0/0;

// console.log(!isNaN(num))
// console.log(isNaN(num))


// const num = 123
// const num = 123.321

// console.log(Number.isInteger(num))
// console.log(Number.isFinite(num))
// console.log(parseInt(num))
// console.log(parseFloat(num))
// console.log(Number.parseInt(num))
// console.log(num.valueOf())
// console.log(num.toFixed(2))
// console.log(num.toPrecision(5))
// console.log(num.toString().length)

// const num = new Number(123)

// console.log(num)
// console.log(num.valueOf())



//? Maths Object in Javascript

//? Math.round
// console.log(Math.round(1))
// console.log(Math.round(1.5))
// console.log(Math.round(1.4))
// console.log(Math.round(1.7))

//? Math.floor
// console.log(Math.floor(1))
// console.log(Math.floor(1.5))
// console.log(Math.floor(1.9))
// console.log(Math.floor(2.6))
// console.log(Math.floor(-2.6))

//? Math.ceil
// console.log(Math.ceil(1))
// console.log(Math.ceil(1.6))
// console.log(Math.ceil(1.9))
// console.log(Math.ceil(-2.6))


//?Math.abs
// console.log(Math.abs(-2))
// console.log(Math.abs(2))

//?Math.sqrt
// console.log(Math.sqrt(4))
// console.log(Math.sqrt(2))
// console.log(Math.sqrt(16))

//? Math.pow
// console.log(Math.pow(3,4))
// console.log(Math.pow(2,6))

//? Math.min
// console.log(Math.min(2,3,44,22,99))

//? Math.max
// console.log(Math.max(2,3,44,22,99))


//? Math.random 

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(randomNumber(7,14))



//? Date in Javascript

// const date = new Date()

// console.log(date)
// console.log(Date.now()/1000/60/60/24/365)


// const date = new Date()

// console.log(date.toString())
// console.log(date.toISOString())
// console.log(date.toLocaleString())
// console.log(date.toUTCString())
// console.log(date.getTime())
// console.log(Date.now())



const timeStamp = Date.now()
const pd = new Date(timeStamp)
console.log(pd)

const twoHrsAdd = timeStamp + 1000*60*60*2
const cd = new Date(twoHrsAdd)
console.log(cd)