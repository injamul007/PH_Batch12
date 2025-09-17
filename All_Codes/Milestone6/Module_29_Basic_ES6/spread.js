//? spread operator

let arr = [1,2,3,0.5,-2];

// console.log(Math.max(23,67,99,11));
// console.log(Math.max(...arr));

//? copy an array using spread operator !
const newArr = [62,37,23,73,27];
const newArr2 = [...newArr, 300,400];

// newArr2.push(99)
// newArr.push(199)

// console.log('arr1',newArr)
// console.log('arr2',newArr2)

const ages = [30,20,40,50,60];
const newAges = [2,4,6,8,10];

const attachAll = [...ages, 555 , ...newAges]; // attach together
// console.log(attachAll);

const digits = [3,4,5];

const newSum = (a,b,c) => a+b+c;
// console.log(newSum(3,4,5))
// console.log(newSum(...digits));

// const str = ['hello', 'hi', 'bye']
const str = 'i am learning programming';
// console.log(...str.replaceAll(' ', '').join('-')) 
// console.log(...str[0] ,...str[3]) 


//? Copy object using spread operator
const info = {name: 'Boss',job: 'Mafia'};
const newInfo = {salary: 'Rules the world', attitude: 'King Level'}

const attachAllInfo = {...info, country: 'world' ,...newInfo};
// console.log(info)
// console.log(newInfo)
// console.log(attachAllInfo)
// const newObj = obj;
// newObj.job = 'Not Mafia'
// console.log(obj);
// console.log(newObj);
// const newObj = {...obj};
// newObj.job = 'Not Mafia'
// console.log(obj);
// console.log(newObj);