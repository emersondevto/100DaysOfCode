const request = require("request");

const url =
  "https://api.darksky.net/forecast/accc9edacb83696bb5deb76c7ccd7e9f/37.8267,-122.4233?lang=es&units=si";

request({ url, json: true }, (error, response) => {
  // Con la opcion json no es necesario hacer JSON.parse
  const data = response.body.currently;
  // console.log(data);
  console.log(
    `${response.body.daily.data[0].summary} En este momento hay ${data.temperature} grados afuera. Hay una probabilidad de ${data.precipProbability}% de llover.`
  );
});

const urlMapbox =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg";

request({ url: urlMapbox, json: true }, (error, response) => {
  const data = response.body;
  console.log("Latitud: ", data.features[0].center[0]);
  console.log("Langitud: ", data.features[0].center[1]);
});
