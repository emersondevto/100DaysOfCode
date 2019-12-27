const request = require("request");

const url =
  "https://api.darksky.net/forecast/f30ab4a3eee347a9515781ee47d8feff/37.8267,-122.4233?lang=es&units=si";

request({ url, json: true }, (error, response) => {
  // Con la opcion json no es necesario hacer JSON.parse
  const data = response.body.currently;
  // console.log(data);
  console.log(
    `${response.body.daily.data[0].summary} En este momento hay ${data.temperature} grados afuera. Hay una probabilidad de ${data.precipProbability}% de llover.`
  );
});
