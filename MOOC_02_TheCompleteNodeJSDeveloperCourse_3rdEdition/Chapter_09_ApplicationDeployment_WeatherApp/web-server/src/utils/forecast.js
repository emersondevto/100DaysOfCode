const request = require("request");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitud, longitud, callback) => {
  const url = `https://api.darksky.net/forecast/accc9edacb83696bb5deb76c7ccd7e9f/${latitud},${longitud}?lang=es&units=si`;

  const response = (error, { body }) => {
    if (error) {
      callback({ error: "Unable to connecto with weather service!" }, null);
    } else if (body.error) {
      callback({ error: "Unable to find location" }, null);
    } else {
      const currently = body.currently;
      const daily = body.daily.data[0];

      const data = {
        summary: daily.summary,
        temperature: currently.temperature,
        precipProbability: currently.precipProbability,
        msg: `${daily.summary} En este momento hay ${
          currently.temperature
        } grados afuera. Hay una probabilidad de ${currently.precipProbability}% de llover. ${
          currently.precipProbability > 65
            ? "Es mejor salir con sombrilla en mano"
            : "NO es necesario llevar sombrilla."
        }`
      };

      callback(null, data);
    }
  };

  const options = {
    json: true,
    url
  };

  request(options, response);
};

module.exports = forecast;

// const url =
//   "https://api.darksky.net/forecast/accc9edacb83696bb5deb76c7ccd7e9f/37.8267,-122.4233?lang=es&units=si";

// // Manejando excepciones para los errores
// // - Cuando no hay internet
// request({ url, json: true }, (error, response) => {
//   // solo uno de los dos argumentos llega definido y el otro es null
//   if (error) {
//     console.log("Unable to connecto with weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     // Con la opción json no es necesario hacer JSON.parse
//     const data = response.body.currently;
//     // console.log(data);
//     console.log(
//       `${response.body.daily.data[0].summary} En este momento hay ${data.temperature} grados afuera. Hay una probabilidad de ${data.precipProbability}% de llover.`
//     );
//   }
// });
