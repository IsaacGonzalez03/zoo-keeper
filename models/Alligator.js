export default class Alligator {
  constructor(name = '',
    color = '',
    gender = '',
    weight = 0,
    tailLengthInch = 0,
    teethSize = '',
    food = '',
    noise = ''
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
    this.food = food;
    this.noise = noise;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}