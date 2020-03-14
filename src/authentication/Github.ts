
const GithubApp = {
    clientId: "d93290aebc3085d27fdf",
    loginUrl: "https://github.com/login/oauth/authorize",
    redirectUri: "http://localhost:3000/callback"
}

export function GitubLogin(){
    window.location.href = `${GithubApp.loginUrl}?client_id=${GithubApp.clientId}&redirect_uri=${encodeURIComponent(GithubApp.redirectUri)}&scopes=repo`;
}
