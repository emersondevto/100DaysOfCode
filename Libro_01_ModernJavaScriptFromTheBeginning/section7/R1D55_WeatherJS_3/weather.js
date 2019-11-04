class Weather {
  constructor(city, country) {
    this.apiKey = "SZWHNFtS0lw3FN9GzAQIMbrbG3LT3nBi";
    this.city = city;
    this.country = country;
  }

  // fetch get location id by city
  async getLocationKey() {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`
    );

    const json = response.json();
    const array = await json;
    const result = array.find(
      location => location.Country.EnglishName.toLowerCase() === this.country.toLowerCase()
    );
    this.key = result.Key;
    return result;
  }

  // fetch weather from API
  async getWeather() {
    const locationFull = await this.getLocationKey();
    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${this.key}?apikey=${this.apiKey}&details=true`
    );
    const json = await response.json();
    json[0].locationFull = locationFull;
    return json[0];
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
