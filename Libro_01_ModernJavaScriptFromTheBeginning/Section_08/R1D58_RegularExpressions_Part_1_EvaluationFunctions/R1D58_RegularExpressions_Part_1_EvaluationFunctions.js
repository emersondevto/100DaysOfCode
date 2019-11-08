console.log("R1D58_RegularExpressions_Part_1_EvaluationFunctions");

// literal regular expression
let re = /hello/;

console.log(typeof re);
console.log(re);
console.log(re.source);

// exec() - Returna un resultado en un array si hace match o nulo si no hace match

const result2 = re.exec("World");

console.log(result2);

const result = re.exec("brad hello hello world");

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

//  test() - Returna true o falso si hay un match
let rei = /hello/i;
// i = case insensitive

const resultTest = rei.test("Hello");

console.log(resultTest);
console.log(re.test("Hello"));

let reg = /hello/g;
// Global search no solo devuelve el primer hello devuelve todos los que encuentra

console.log(reg.exec("hello hello"));

// match() - Returna un resultado en array o null
let str = "Hello there";
const resultMatch = str.match(rei);

console.log(resultMatch);

// search() - Retorna un indice del primer match y si no encuentra retorna -1

str = "Bran Hello There";
let resultSearch = str.search(rei);
console.log(resultSearch);
str = "there";
resultSearch = str.search(rei);
console.log(resultSearch);

// replace() - Retorna una nuevo string con algun o con todos los match de un patron

str = "Hello Hello There";
let newStr = str.replace(rei, "Hola");

console.log(newStr);
