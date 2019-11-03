const weather = new Weather("bogota", "Colombia");

function getCurrentTime() {
  weather
    .getWeather()
    .then(data => {
      console.log(data[0]);
    })
    .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", getCurrentTime);
