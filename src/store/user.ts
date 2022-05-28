import { defineStore } from 'pinia';

export const useUser = defineStore({
  id: "user",
  state: () => ({
    userName: "User",
    loaded: false,
    userGithub: "test",
    loading: false,
    isUserLoggedIn: false,
  }),
});
