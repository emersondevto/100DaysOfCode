const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const inputUser = process.argv;
const location = inputUser[2];

if (!location) {
  console.log("Please provide a location");
} else {
  geocode(location, (error, { latitud, longitud, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitud, longitud, (error, { msg }) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(msg);
    });
  });
}
