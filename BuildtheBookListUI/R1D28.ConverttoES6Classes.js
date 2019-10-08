class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

function newColValue(value) {
  const newCol = document.createElement("td");
  typeof value !== "undefined" &&
    newCol.appendChild(document.createTextNode(value));
  return newCol;
}

class UI {
  constructor() {}

  addBookToList(book) {
    const list = document.getElementById("book-list");
    // create a table row
    const row = document.createElement("tr");
    // insert columns

    row.appendChild(newColValue(book.title));
    row.appendChild(newColValue(book.author));
    row.appendChild(newColValue(book.isbn));
    const deleteButton = newColValue();
    deleteButton.appendChild(document.createElement("a"));
    deleteButton.firstChild.className = "delete";
    deleteButton.firstChild.appendChild(document.createTextNode("X"));
    row.appendChild(deleteButton);

    list.appendChild(row);

    console.log(row);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      this.showAlert("El libro ha sido removido", "success");
    }
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement("div");
    //Add className
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".container");
    // Get form
    const form = document.querySelector("#book-form");
    // Insertar alerta
    container.insertBefore(div, form);
    // remueve la alerta luego de 5 segundos
    setTimeout(() => {
      // div.remove();
      document.querySelector(".alert").remove();
    }, 3000);
    // div.remove();
  }
}

// Event liseners
document.getElementById("book-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instanciando un objeto libro
  const book = new Book(title, author, isbn);

  // Instanciando un objeto UI
  const ui = new UI();

  console.log(ui);

  // validate
  if (title === "" || author === "" || isbn === "") {
    // console.log(alert("Faltan campos"));
    // Error alert
    ui.showAlert("Porfavor llenar todos los campos", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert("Libro agregado", "success");

    // Clear Fields
    ui.clearFields();
  }

  // console.log(book);
  // console.log(e);
});

//EVent listener for delete
document.getElementById("book-list").addEventListener("click", function(e) {
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
});
