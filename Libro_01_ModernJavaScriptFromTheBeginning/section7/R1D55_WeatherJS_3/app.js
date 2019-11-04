const weather = new Weather("bogota", "Colombia");
const ui = new UI();

function getCurrentTime() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", getCurrentTime);
