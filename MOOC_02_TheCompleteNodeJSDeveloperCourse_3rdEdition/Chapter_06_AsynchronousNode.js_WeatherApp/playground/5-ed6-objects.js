// Object property shorthand

const name = "Emerson";
const userAge = 31;

const user = {
  name,
  age: userAge,
  location: "Bogota"
};

console.log(user);

// Object destructuring

const product = {
  label: "Red Notbook",
  price: 3,
  stack: 201,
  salesPrice: undefined
};

const label2 = product.label;
const price2 = product.price;
const rating2 = product.rating || 10;

const { label: productLabel, price, rating = 5 } = product;

console.log(productLabel, price, rating);
console.log(label2, price2, rating2);

let list = ["hola", "mundo"];

let [hola, mundo, unico2 = 3] = list;

console.log(hola, mundo, unico2);

console.log(list);

const unico = Symbol("Unico");

list = ["hola", "mundo"];
list[unico] = "Emerson";

[hola, mundo, test] = list;

console.log(hola, mundo, test);

const transaction = (type, { label }) => {
  console.log(type, label);
};

transaction("order", product);
