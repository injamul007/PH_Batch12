//? Now let's learn about the concept of destructuring

//? Object destructuring
const product = {name: 'shirt', price: 500, quantity: 7};

//? destructuring methods
const {price:mainTk,quantity,} = product;
console.log(mainTk ,quantity);

// const discount = product.price * 20/100;
// const yourPayWithoutDiscount = product.price - discount;
// const vat = product.price * 7/100;
// const finalPay =  yourPayWithoutDiscount + vat;

// const price = product.price;

// const discount = price * 20/100;
// const yourPayWithoutDiscount = price - discount;
// const vat = price * 7/100;
// const finalPay =  yourPayWithoutDiscount + vat;

//? destructuring method
// const {price} = product;
// console.log(price)

const discount = mainTk * 20/100;
const yourPayWithoutDiscount = mainTk - discount;
const vat = mainTk * 7/100;
const finalPay =  yourPayWithoutDiscount + vat;

console.log(finalPay)

///? --------------------------------------- //
//? Array destructuring

const numbersArr = [25,88];
// console.log(numbersArr);
const [first, second, three=100] = numbersArr

// console.log(numbersArr)
// console.log(first, second, three)

const marks = [90,88,84,94];
//? now in destructuring mode
const [math,physics,english,chemistry] = marks;
// const math = marks[0];
// const physics = marks[1];
// const english = marks[2];
// const chemistry = marks[3];
// console.log(marks)
// console.log(math,physics,english,chemistry)