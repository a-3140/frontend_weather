import { defineStore } from 'pinia';

export const useWeather = defineStore({
  id: "weather",
  state: () => ({
    weatherLoading: false,
    weatherLoaded: false,
    weatherData: {
      date: Date.now().toString(),
      temp: 0,
      description: "",
      main: "",
      pressure: 0,
      humidity: 0,
    },
  }),
  actions: {
    async displayWeather() {
      this.weatherLoading = true;
      this.weatherData = {
        ...this.weatherData,
        temp: 31,
        description: "Sky is clear",
        main: "Clear",
        pressure: 102.3,
        humidity: 100,
      };
      this.weatherLoading = false;
      this.weatherLoaded = true;
    },
  },
});
