class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-desc");
    this.tempeture_string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewPoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    console.log(weather);
    this.location.textContent = weather.locationFull.AdministrativeArea.LocalizedName;
    this.description.textContent = weather.WeatherText;
    this.tempeture_string.textContent = ` 
    ${weather.Temperature.Metric.Value} ${weather.Temperature.Metric.Unit}
    (${weather.Temperature.Imperial.Value} ${weather.Temperature.Imperial.Unit})`;
    // this.icon.setAttribute('src', weather.)
    this.humidity.textContent = `Relative humidity: ${weather.RelativeHumidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.RealFeelTemperature.Metric.Unit} ${weather.RealFeelTemperature.Metric.Value}`;
    this.dewPoint.textContent = `DewPoint: ${weather.DewPoint.Metric.Unit} ${weather.DewPoint.Metric.Value}`;
    this.wind.textContent = `Wind: ${weather.Wind.Speed.Metric.Value} ${weather.Wind.Speed.Metric.Unit}`;
  }
}
