console.log("ES6 Maps");
// MAPS are key value pairs and we can use any type as a key or a value

const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function() {},
  key4 = function() {
    console.log("hi maps");
  };

// set map values by keys
map1.set(key1, "Value 1");
map1.set(key2, "Value 2");
map1.set(key3, "Value 3");
map1.set(key4, "Value 4");

console.log(map1);

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// count values
console.log(map1.size);

// ITERATING MAPS

// Loop using for...of to get keys and values

// Recuerden que siempre devuelve primero la llave y luego el valor
for (let [key, values] of map1) {
  console.log(`${key} : ${values}`);
}

// Este esta mal dado do que la deconstruccion devuelve promero la llave y luego el valor
// for (let [values, key] of map1) {
//   console.log(`${key} : ${values}`);
// }

// iterates keys only

for (const key of map1.keys()) {
  console.log(key);
}

// iterates values only

for (const value of map1.values()) {
  console.log(value);
}

// iterates with forEach
// con el forEach el orden es value key lo cua difiere con el for...of
map1.forEach(function(value, key) {
  console.log(`${key} : ${value}`);
});

// este esta mal dado que devuelve value key con el forEach contrario al for...of que es key value
// map1.forEach(function(key, value) {
//   console.log(`${key} : ${value}`);
// });

// CONVERTO TO ARRAY

// create an array of the key value pairs

// lista de items en un array con la siguiente estructura
// [
//   ["key", "value"]...
// ]
const keyValArr = Array.from(map1);
console.log(keyValArr);

// create an array with only values
const valArr = Array.from(map1.values());
console.log(valArr);

// create an array with only keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);

// es posible invocar lo que este tanto en keys como en values
keyArr[3]();
