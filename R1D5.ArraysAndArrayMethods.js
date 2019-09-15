console.log("Arrays & Array Methods");

console.log("Create Some Arrays");

const numbers = [22, 5, 85, 3248, 82, 32];
console.log(numbers);

const numbers2 = new Array(654, 78, 15, 9874, 52);
console.log(numbers2);

const frutas = ["manzana", "banana", "naranja", "pera"];
console.log(frutas);

const mixto = [
  undefined,
  null,
  "Hello",
  23,
  { a: 1 },
  [12, 56, 7],
  true,
  new Date()
];
console.log(mixto);

let val;
console.log(numbers);
console.log(val);

console.log("Get the arrray length");
val = numbers.length;
console.log(numbers);
console.log(val);

console.log("Check it is array");
val = Array.isArray(numbers);
console.log(numbers);
console.log(val);

console.log("Get a single value from an array");
val = numbers[0];
console.log(numbers);
console.log(val);

console.log("Insert into an array");
val = numbers[3] = 100;
console.log(numbers);
console.log(val);

console.log("find index of a value");
val = numbers.indexOf(82);
console.log(numbers);
console.log(val);

console.log("Mutando arrays");

console.log("Add on to end");
val = numbers.push(111);
console.log(numbers);
console.log(val);

console.log("Add on to front");
val = numbers.unshift(222);
console.log(numbers);
console.log(val);

console.log("Take off from end");
val = numbers.pop();
console.log(numbers);
console.log(val);

console.log("Take off from front");
val = numbers.shift();
console.log(numbers);
console.log(val);

console.log("Splice values");
val = numbers.splice(1, 2);
console.log(numbers);
console.log(val);

console.log("Reverse the array");
val = new Array(...numbers);
numbers.reverse();
console.log(numbers);
console.log(val);

console.log("Concatenando arrays");
val = numbers.concat(numbers2);
console.log(numbers);
console.log(val);

console.log("Sorting an array");
val = [...frutas];
frutas.sort();
console.log(frutas);
console.log(val);

console.log("Sorting an array wried brahavior");
console.log("Organiza por el primer numero");
val = [...numbers];
val.sort();
console.log(numbers);
console.log(val);

console.log("organiza bien usando el compare function callback");
val = [...numbers];
val.sort(function(x, y) {
  console.log("x,y", x, y, x - y);
  return x - y;
});
console.log(numbers);
console.log(val);

console.log("REVERSE organiza bien usando el compare function callback");
val = [...numbers];
val.sort(function(x, y) {
  console.log("y,x", y, x, y - x);
  return y - x;
});
console.log(numbers);
console.log(val);

console.log("Find a value with a specific condicion");
function menor30(num) {
  return num < 30;
}
val = numbers.find(menor30);
console.log(numbers);
console.log(val);

console.log("Find a value with a specific condicion");
function over50(num) {
  return num > 30;
}
val = numbers.find(over50);
console.log(numbers);
console.log(val);
