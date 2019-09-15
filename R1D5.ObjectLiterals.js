console.log("Objetos Literals");

// Un Object Literal es un objeto con estructura tipo JSON y que en Javascript tiene un uso igual al que tiene un objeto en otros lenguajes de programacion.

// Todo es manejado en un modelo de key value pares y dentro de un Object Literal

const person = {
  firstName: "Emerson",
  lastName: "Volkov",
  age: 31,
  email: "example@example.com",
  hobbies: ["music", "sports", "video games"],
  address: {
    city: "Bogota",
    state: "Cundinamarca"
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }

  // name: this.firstName + this.lastName
};

console.log("print object person");
console.table(person);

console.log("get a specific value");
console.log(person.firstName);
console.log(person["firstName"]);

console.log("get a specific insight other object");
console.log(person.address.city);

console.log("Ejecutando una funcion almacenada en un Object Literal");
console.log(person.getBirthYear());

console.log("Obteniendo un valor del array");
console.log(person.hobbies[1]);

console.log("Tambien es posible tener arrays de objects literals");
const people = [
  { name: "Emerson", age: 21 },
  { name: "Alejandra", age: 31 },
  { name: "Andres", age: 33 }
];
console.table(people);

for (let i = 0; i < people.length; i++) {
  const element = people[i];
  console.log(element.name);
}
