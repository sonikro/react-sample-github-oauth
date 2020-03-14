export class GithubApi {
  private baseUrl = "https://api.github.com";
  constructor(private bearerToken: string) {}

  public listMyRepos() {
    return fetch(`${this.baseUrl}/user/repos`, {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`
      },
      method: "GET"
    })
    .then(response => response.json())
  }
}
