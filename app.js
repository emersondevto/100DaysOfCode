const url = "./R1D1.console.js";
try {
  import(url);
} catch (error) {
  console.error(error.message);
}
