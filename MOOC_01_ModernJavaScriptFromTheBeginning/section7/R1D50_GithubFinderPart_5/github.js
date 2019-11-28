class GitHub {
  constructor() {
    this.client_ID = "6f7594bf8b1626394708";
    this.client_secret = "007a03a4f8f8668b01f62a402c1d664340af8e2b";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?${this.getUrlSecurity()}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${
        this.repos_sort
      }&${this.getUrlSecurity()}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const statusProfile = profileResponse.status;
    const statusRepos = reposResponse.status;

    return {
      repos,
      profile,
      statusRepos,
      statusProfile
    };
  }

  getUrlSecurity() {
    return `client_id=${this.client_ID}&client_secret=${this.client_secret}`;
  }
}
