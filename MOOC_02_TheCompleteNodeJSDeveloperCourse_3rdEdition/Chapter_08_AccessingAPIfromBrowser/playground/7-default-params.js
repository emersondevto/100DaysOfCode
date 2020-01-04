const greeter = (name = "user", age) => {
  return "Hello " + name;
};

console.log(greeter("Emerson"));
console.log(greeter());
