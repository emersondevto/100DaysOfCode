const path = require("path");

const express = require("express");

const app = express();

// // Variables que provee nodejs
// __dirname;
// __filename;
// console.log(path.join(__dirname, "../public"));
// console.log(__filename);

const pathStaticFiles = path.join(__dirname, "../public");

app.use(express.static(pathStaticFiles));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather hbs"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "Help!!"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    latitud: 40,
    longitud: -74,
    localizacion: "Colombia",
    temperatura: 50
  });
});

app.listen(3000, c => {
  console.log("Running");
});
