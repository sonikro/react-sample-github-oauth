import { observable, runInAction } from "mobx";
import { GithubApi } from "../api/Github";
import { AuthStore } from "./AuthStore";

export class RepoStore {
  @observable repos: Array<any> = [];
  @observable isLoading: boolean = false;
  @observable error: any = {};

  constructor(private authStore: AuthStore) {}

  get api() {
    return new GithubApi(this.authStore.token);
  }

  public fetchRepos() {
    return runInAction(async () => {
      try {
        this.isLoading = true;
        this.repos = await this.api.listMyRepos();
        this.error = undefined;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    });
  }
}
