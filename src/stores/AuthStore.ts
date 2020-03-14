import { observable, computed, action } from "mobx";
import { GitubLogin } from "../authentication/Github";

export class AuthStore {
  @observable private _isAuthenticated: boolean = false;
  @observable private _isAuthenticating: boolean = false;
  @observable private _token: string = "";
  @observable private _authError: string = "";

  constructor() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this._isAuthenticated = true;
      this._token = token;
      this._isAuthenticating = false;
    }
  }

  @computed
  get authError() {
    return this._authError;
  }

  @computed
  get isAuthenticated() {
    return this._isAuthenticated;
  }

  @computed
  get isAuthenticating() {
    return this._isAuthenticating;
  }

  @computed
  get token() {
    return this._token;
  }

  public login() {
    GitubLogin();
  }

  @action
  public async exchangeToken(authCode: string) {
    try {
      this._isAuthenticating = true;
      const response = await fetch(
        `http://localhost:3001/token?code=${authCode}`
      ).then(response => response.json());
      if (response.error) {
        throw Error(response);
      }
      this._token = response.access_token;
      sessionStorage.setItem("token", this._token);
      this._isAuthenticated = true;
      window.location.href = "/";
    } catch (error) {
      this._authError = JSON.stringify(error);
    } finally {
      this._isAuthenticating = false;
    }
  }
}
