console.log("Using Object.create");

// Object.create es un metodo de Object que ayuda al mapeo de sentencias a objetos

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

console.log(mary);

console.log(mary.greeting());

mary.getsMarried("Thomoson");

console.log(mary.greeting());

// Un poco rara esta sintaxis para crear un nuevo objeto
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Joe" },
  age: { value: 30 }
});

console.log(brad);
console.log(brad.greeting());
