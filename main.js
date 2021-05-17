import Alligator from "./models/Alligator.js"
import Bear from "./models/Bear.js";
import Camel from "./models/Camel.js";
import Dolphin from "./models/Dolphin.js";
import Elephant from "./models/Elephant.js";
import Flamingo from "./models/Flamingo.js";

class Zoo {
  constructor(name = "", size) {
    this.name = name
    this.size = size
  }
}

let alex = new Alligator("alex", "brown", "M", 500, 6, "small", "children", "crunch");
let ben = new Bear("ben", "brown", "M", 1300, 0, "medium", "salmon", "ROAR");
let cass = new Camel("cass", "tan", "F", 880, 0, "small", "Cigarettes", "mmmugh");
let dennis = new Dolphin("dennis", "grey", "M", 200, 2, "small", "fish", "eee eee eee");
let erika = new Elephant("erika", "grey", "F", 8800, 5, "large", "peanuts", "preeeew");
let frank = new Flamingo("frank", "pink", "M", 6, 1, "none", "algae");


let animals = []
animals.push(alex, ben, cass, dennis, erika, frank)


let male = animals.filter(an => an.gender == "M")
console.log(male)











