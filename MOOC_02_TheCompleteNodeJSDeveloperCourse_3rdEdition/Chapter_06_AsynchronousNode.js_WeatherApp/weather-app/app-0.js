console.log("Starting");

setTimeout(() => {
  console.log("2 Seconds Timer");
}, 200);

setTimeout(() => {
  console.log("0 Seconds TImer");
}, 0);

console.log("Stopping");

const test = () => {
  let element = 0;

  for (let index = 0; index < 10000000000; index++) {
    element = +index;
  }
  console.log(element);
};

test();
