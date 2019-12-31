const https = require("https");

const url = `https://api.darksky.net/forecast/accc9edacb83696bb5deb76c7ccd7e9f/37.8267,-122.4233?lang=es&units=si`;

const opciones = {
  hostname: url
};

let data = "";

const request = https.request(url, response => {
  response.on("data", chunk => {
    // console.log(chunk.toString());
    data += chunk.toString();
  });

  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.on("error", error => {
  console.log(error);
});

request.end();
