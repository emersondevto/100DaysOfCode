console.log("R1D64_Destructuring");
// Destructuring Assigment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(a);
console.log(b);
console.log(rest);
console.log(c);

({ a, b, ...rest } = { a: 111, b: 222, c: 333, d: 444 });
console.log(a);
console.log(b);
console.log(rest);

// Array destructuring

const people = ["John", "Mick", "Bob"];

const [person1, person2, person3] = people;

console.log(person1);
console.log(person2);
console.log(person3);

// Parse array returned from fuction
function getPeople() {
  return ["John", "Mick", "Bob"];
}

let person4, person5, person6;
[person4, person5, person6] = getPeople();
console.log(person4);
console.log(person5);
console.log(person6);

// Object destructuring

const Person = {
  name: "John",
  age: 31,
  city: "Bogotá",
  gender: "Male",
  sayHello: function() {
    return "Hi";
  }
};

// Old ES5
// const name = Person.name,
//   age = Person.age,
//   city = Person.city;

// New ES6
const { name, age, city, sayHello } = Person;

console.log(name, age, city);
console.log(sayHello());
