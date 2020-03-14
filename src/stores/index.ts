import { AuthStore } from "./AuthStore";
import { RepoStore } from "./RepoStore";

const authStore = new AuthStore()
export const stores = {
    auth: authStore,
    repo: new RepoStore(authStore)
}