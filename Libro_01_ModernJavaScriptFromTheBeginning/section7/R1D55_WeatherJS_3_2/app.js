const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);

function getCurrentTime() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}

function changeLocation(e) {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  weather.changeLocation(city, country);

  // set location in Local Storage
  storage.setLocationData(city, country);

  //Get and display weather current time
  getCurrentTime();
  $("#locModal").modal("hide");
}

document.addEventListener("DOMContentLoaded", getCurrentTime);
// change location event
document.getElementById("w-change-btn").addEventListener("click", changeLocation);
