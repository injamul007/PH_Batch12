//? Double EquaL Sign ==
//? this apply for double equal
//? if one value is string, another is number: converts string
//? if one is boolean and another is number, converts boolean to number : true --> 1 and false --> 0

// console.log(2 == 2)
// console.log(2 == '2')
// console.log(2 == 1)
// console.log(2 == true)
// console.log(1 == true)
// console.log('1' == true) //? 1 == '1' --> 1 == 1 = true
// console.log(false == 0) //? 0 == '0' --> 0 == 0 = true
// console.log(null == undefined)
// console.log(NaN == NaN) //?
// console.log('' == '') //?
// console.log(0 == '')
// console.log([] == '')
// console.log([5] == '5')
// console.log([5] == 5)
// console.log([5].toString()); 
console.log([] == []); //? Comparing to non-primitive with non-primitive --> this will give false bcz of their reference is not same
console.log({} == {}); //? Comparing to non-primitive with non-primitive --> this will give false bcz of their reference is not same
const p = [4,5,6]
const q = p;
console.log(p == q) //? Comparing to non-primitive with non-primitive --> but this will give true bcz of their reference is same !!!