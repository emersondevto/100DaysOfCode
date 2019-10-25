console.log("R1D44.Async_Await");
// function myFunc() {
//   return "Hello";
// }

// console.log(myFunc());

// // COn el async hace que la funcion retorne un promise
// async function myFunc() {
//   return "Hello";
// }

// myFunc().then(response => console.log(response));

async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello"), 2000);
  });

  const error = false;
  if (!error) {
    const res = await promise; // espera a que el promise sea resuelto

    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then(response => console.log(response))
  .catch(error => console.log(error));

// cuando tenga el async siempre va a devolver un promise
async function getUsers() {
  // espera la respuesta del llamado al api fetch
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // solo se procede cuando a sido resuelto
  const data = response.json();
  // retorna la data ya resuelta
  return data;
}

console.log(getUsers());
getUsers().then(res => console.log(res));
