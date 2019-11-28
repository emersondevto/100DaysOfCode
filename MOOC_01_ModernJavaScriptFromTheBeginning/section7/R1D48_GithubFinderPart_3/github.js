class GitHub {
  constructor() {
    this.client_ID = "6f7594bf8b1626394708";
    this.client_secret = "7fc54af8ec7fdf35da9be052b2f6cdf381e83f83";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}${this.getUrlSecurity()}`
    );

    const profile = await profileResponse.json();
    const status = profileResponse.status;

    return {
      profile,
      status
    };
  }

  getUrlSecurity() {
    return `?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
  }
}
