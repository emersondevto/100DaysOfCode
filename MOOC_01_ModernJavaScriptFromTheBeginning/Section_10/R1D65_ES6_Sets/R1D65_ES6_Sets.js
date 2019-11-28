console.log("ES6 Sets");
// SETS - Store unique values of eny type

const set1 = new Set();

const object = { name: "Emerson" };

// Add values to set
set1.add(100);
set1.add(200);
set1.add("this is a string");
set1.add({ name: "jhon" });
set1.add(true);
set1.add(100);
set1.add({ name: "jhon" });
set1.add(object);
set1.add(object);

//
console.log(set1);

const set2 = new Set([100, 200, "string", { name: "hola" }, 100]);

console.log(set2);

// Get count
console.log(set1.size);

// check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));

console.log(set1.has({ name: "jhon" }));
console.log(set1.has(object));

console.log(set1.delete(100));
console.log(set1.delete(500));
console.log(set1.delete(object));

console.log(set1);
console.log(Array.from(set1));
console.log(set1[1]);

// ITERATING THROUGH SETS

// for...of
for (const item of set1) {
  console.log(item);
}

for (const item of set1.values()) {
  console.log(item);
}

for (const item of set1.keys()) {
  console.log(item);
}

console.log("entries");

for (const item of set1.entries()) {
  console.log(item);
}

// ForEach loop
set1.forEach(function(item) {
  console.log(item);
});

// CONVERT SETS TO ARRAYS
const arr1 = Array.from(set1);
console.log(typeof arr1);
console.log(arr1 instanceof Array);
