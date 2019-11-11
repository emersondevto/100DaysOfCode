console.log("R1D62_Iterators_Generators");
// Interator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// crear un array con nombres
const namesArr = ["Jack", "Emerson", "Aleja"];
// inicializar el iterador y pasarle el array de nombres
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// Generator Example
console.log("Generator Exmple");
function* sayNames(names) {
  yield "Jack";
  yield "Emerson";
  yield "Aleja";
}

const generatorNames = sayNames();

console.log(generatorNames.next());
console.log(generatorNames.next());
console.log(generatorNames.next());
console.log(generatorNames.next());

console.log("ID Creator");

function* createID() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createID();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
