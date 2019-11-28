console.log("Prototypal Inheritance");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hola ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Aleja", "Ramirez");

console.log(person1);
console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Herendando los metodos de Person
Customer.prototype = Object.create(Person.prototype);

// Hacer customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Greeting
Customer.prototype.greeting = function() {
  return `Hola Cliente ${this.firstName} ${this.lastName}`;
};

// crear un cliente
const cliente1 = new Customer("Tom", "Rodriguez", "312999999", "VIP");

console.log(cliente1);
console.log(cliente1.greeting());
// console.log(object);
