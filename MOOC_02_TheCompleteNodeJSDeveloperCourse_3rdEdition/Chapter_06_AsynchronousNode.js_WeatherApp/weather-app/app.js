const request = require("request");

const url =
  "https://api.darksky.net/forecast/accc9edacb83696bb5deb76c7ccd7e9f/37.8267,-122.4233?lang=es&units=si";

// Manejando excepciones para los errores
// - Cuando no hay internet
request({ url, json: true }, (error, response) => {
  // solo uno de los dos argumentos llega definido y el otro es null
  if (error) {
    console.log("Unable to connecto with weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    // Con la opción json no es necesario hacer JSON.parse
    const data = response.body.currently;
    // console.log(data);
    console.log(
      `${response.body.daily.data[0].summary} En este momento hay ${data.temperature} grados afuera. Hay una probabilidad de ${data.precipProbability}% de llover.`
    );
  }
});

const urlMapbox =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg";

// const urlMapbox =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg";

request({ url: urlMapbox, json: true }, (error, response) => {
  if (error) {
    console.log("No fue posible conectarse a mapbox");
  } else if (response.body.features.length === 0) {
    console.log("NO hay coincidencias");
  } else {
    const data = response.body;
    console.log("Latitud: ", data.features[0].center[0]);
    console.log("Langitud: ", data.features[0].center[1]);
  }
});
