const car = {
  brand: "Toyota",
  color: "Red",
  speed: `180kmh`,
  drive: function() {
    console.log(`The brand new ${this.brand} Car is Starting and it's color is ${this.color}`)
  }
};

// console.log(car.drive())

const person = new Object();
person.name = "boss"
person.age = 32

console.log(person)
