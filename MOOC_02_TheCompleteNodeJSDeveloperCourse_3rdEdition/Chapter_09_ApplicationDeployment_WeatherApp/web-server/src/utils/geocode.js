const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg`;

  const response = (error, { body: { features } }) => {
    if (error) {
      callback({ error: "No fue posible conectarse a mapbox" }, null);
    } else if (features.length === 0) {
      callback({ error: "NO hay coincidencias" }, null);
    } else {
      const {
        place_name: location,
        center: [longitud, latitud]
      } = features[0];
      const geo = {
        location,
        latitud,
        longitud
      };
      callback(null, geo);
    }
  };

  const options = {
    json: true,
    url
  };

  request(options, response);
};

module.exports = geocode;

// const urlMapbox =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg";

// const urlMapbox =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?limit=1&access_token=pk.eyJ1IjoiZW1lcnNvbnZvbGtvdiIsImEiOiJjazRvM2M4MmczMnAxM2VydnNubjlkZXF6In0.ibf18jbSSvScuEMGkhT9yg";

// request({ url: urlMapbox, json: true }, (error, response) => {
//   if (error) {
//     console.log("No fue posible conectarse a mapbox");
//   } else if (response.body.features.length === 0) {
//     console.log("NO hay coincidencias");
//   } else {
//     const data = response.body;
//     console.log("Latitud: ", data.features[0].center[0]);
//     console.log("Longitud: ", data.features[0].center[1]);
//   }
// });
