// native imports nodejs
const path = require("path");

// Docs https://expressjs.com/en/4x/api.html
// package imports
const express = require("express");
const hbs = require("hbs");

const app = express();

// // Variables que provee nodejs
// __dirname;
// __filename;
// console.log(path.join(__dirname, "../public"));
// console.log(__filename);

// Difine paths for express config
const pathStaticFiles = path.join(__dirname, "../public");
const pathViewsHbr = path.join(__dirname, "../templates/views");
const pathPartials = path.join(__dirname, "../templates/partials");

// set up handlebars engines and views locations
app.set("view engine", "hbs");
app.set("views", pathViewsHbr);
hbs.registerPartials(pathPartials);

// Setup static directory to serve
app.use(express.static(pathStaticFiles));

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

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help article not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page dont found"
  });
});

app.listen(3000, c => {
  console.log("Running");
});
