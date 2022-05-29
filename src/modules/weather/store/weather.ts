import { defineStore } from 'pinia';

function getFormattedDate(date: Date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}

export const useWeather = defineStore({
  id: "weather",
  state: () => ({
    weatherLoading: false,
    weatherLoaded: false,
    weatherData: {
      date: getFormattedDate(new Date()),
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
