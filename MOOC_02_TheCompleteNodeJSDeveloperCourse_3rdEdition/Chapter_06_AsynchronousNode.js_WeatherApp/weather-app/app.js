const request = require("request");

const url =
  "https://api.darksky.net/forecast/f6c77d678ec62a2b67eb9b8b6817041d/37.8267,-122.4233";

request({ url }, (error, response) => {
  const data = response.body;
  console.log(data);
});
