//? more Object

const nayok = {
  name: 'Boss khan',
  id: 121,
  address: 'Movie cinema',
  isSingle: true,
  friends: ['opu', 'raaz', 'salman', 'aamir'],
  movies: [{name: 'no.1', year: 2015},{name: 'king khan', year: 2018}],
  act: function() {
    console.log('Acting like Boss khan')
  },
  car: {
    brand: 'tesla',
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: 'tesla',
      ceo: 'Elon Musk',
      country: 'USA',
    }
  }
}

// console.log(nayok)
// nayok.act();
// console.log(nayok.car.manufacturer.ceo)