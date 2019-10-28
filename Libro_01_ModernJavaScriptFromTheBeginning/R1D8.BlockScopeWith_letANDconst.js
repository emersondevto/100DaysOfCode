console.log("Block Scope With let & const");

var a = 1;
let b = 2;
const c = 3;

console.log("GLOBAL SCOPE", a, b, c);

function functionScope() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("FUNCTION SCOPE", a, b, c);
}

functionScope();

console.log("GLOBAL SCOPE", a, b, c);

console.log(
  "Hasta este momento son variables diferentes porque estan en scopes diferentes"
);

console.log("BLOCK SCOPE cualquier variable que este envuelta en corchetes");

if (true) {
  var a = 4; // <<< Notece que dentro del if si es reconocida la variable a
  let b = 5;
  const c = 6;
  console.log("BLOCK SCOPE IF", a, b, c);
}

console.log("GLOBAL SCOPE", a, b, c);
console.log("var no queda aislada con block scope como un if o for");

// for (let i = 0; i < 10; i++) {
//   var a = i;
//   let b = i;
//   const c = i;
//   console.log("BLOCK SCOPE FOR", a, b, c);
// }

// for (let a = 0; a < 10; a++) {
//   console.log("BLOCK SCOPE FOR", a);
// }

for (var a = 0; a < 10; a++) {
  console.log("BLOCK SCOPE FOR", a);
}

console.log("GLOBAL SCOPE", a, b, c);

console.log(
  "var es aislada funciones u global scope, let y const se aislan si estan envueltas en corchetes tanto en Global Scope como en BLock Scope o function scope"
);

console.log("var funtion scope, let and const block scope");
