//? Problem-4

function findAddress(obj) {
  let street = obj.street ? obj.street : "__";
  let house = obj.house ? obj.house : "__";
  let society = obj.society ? obj.society : "__";

  return street+','+house+', '+society;
}

console.log(findAddress({street:10,house:'15A',society:"Earth Perfect"}));
console.log(findAddress({street:10,society:"Earth Perfect"}));
console.log(findAddress({street:10}));

