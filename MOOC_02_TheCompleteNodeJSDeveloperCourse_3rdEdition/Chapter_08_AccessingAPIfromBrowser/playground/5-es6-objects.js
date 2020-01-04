// Valor por default es un objeto vacio

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order");

transaction("order", { label: "shoes", stock: 19 });
