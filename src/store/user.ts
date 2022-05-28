import { defineStore } from 'pinia';

export const useUser = defineStore({
  id: "user",
  state: () => ({
    userName: "",
    loaded: false,
    userGithub: "",
    loading: false,
    isUserLoggedIn: false,
  }),
  actions: {
    //   TODO: Add proper logic with auth0
    async login() {
      this.userName = "Test Username";
      this.loaded = true;
      this.userGithub = "https://github.com";
      this.loading = false;
      this.isUserLoggedIn = true;
    },
    async logout() {
      this.userName = "";
      this.loaded = true;
      this.userGithub = "";
      this.loading = false;
      this.isUserLoggedIn = false;
    },
  },
});
