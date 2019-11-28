const user = {
  email: "joe@example.com"
};

console.log("Error Handling & Regular Expressions");

// con try y catch podemos capturar el error y evitar que el programa se detenga por algun tipo de excepción
try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce SyntaxError
  // console.log(eval("2+2"));
  // eval("Hello World");

  // Produce URIError
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("Custom SyntaxError User has no name");
  }
} catch (error) {
  console.log(`${error.name}: ITS NULL STUPID!!!`);
  // console.error("My Error", error);
  console.log(error);
  console.error(error.message);
  console.error(error.name);
  console.log("ReferenceError", error instanceof ReferenceError);
  console.log("TypeError", error instanceof TypeError);
  console.log("SyntaxError", error instanceof SyntaxError);
  console.log("URIError", error instanceof URIError);
} finally {
  console.log("Always is going to be called reguardless of result");
}

console.log("Program continues...");

// Aqui detiene completamente el programa
myFunction();

console.log("Program continues... 2");
