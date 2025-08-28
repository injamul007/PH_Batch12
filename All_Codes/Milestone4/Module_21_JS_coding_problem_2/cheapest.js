//??


const mobile = [
  {name: 'Samsung', prices: 20000, cam: '12mp', color: 'black'},
  {name: 'iPhone', prices: 200000, cam: '24mp', color: 'rose gold'},
  {name: 'LG', prices: 30000, cam: '48mp', color: 'brown'},
  {name: 'Xiaomi', prices: 24000, cam: '64mp', color: 'blue'},
  {name: 'Realm', prices: 16000, cam: '48mp', color: 'white'}
]

function cheapestMobile(numbers) {
  let cheapestPricePhone = numbers[0].prices;
  for (const num of numbers) {
    if (num.prices > cheapestPricePhone) {
      cheapestPricePhone = num;
    }
  }
  return cheapestPricePhone;
}

console.log('This is the cheapest price phone of all ->',cheapestMobile(mobile));