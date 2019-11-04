class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "Bogota";
    this.defaultCountry = "Colombia";
  }

  getLocationData() {
    const cityOnStorage = localStorage.getItem("city");
    console.log(cityOnStorage);
    if (cityOnStorage === null) {
      this.city = this.defaultCity;
    } else {
      this.city = cityOnStorage;
    }

    const countryOnStorage = localStorage.getItem("country");
    if (countryOnStorage === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = countryOnStorage;
    }

    return {
      city: this.city,
      country: this.country
    };
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}
