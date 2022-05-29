<script setup lang="ts">
import { useUser } from "@/store/user";
import { storeToRefs } from "pinia";
import LoggedIn from "@/modules/weather/components/LoggedIn.vue";
import LoggedOut from "@/modules/weather/components/LoggedOut.vue";
import { useWeather } from "@/modules/weather/store/weather";
import Weather from "@/modules/weather/components/Weather.vue";

const { isUserLoggedIn, userName, userGithub } = storeToRefs(useUser());
const { weatherData, weatherLoaded, weatherLoading } = storeToRefs(
  useWeather()
);
const { displayWeather } = useWeather();
const reset = () => {
  useWeather().$reset();
};
</script>
<template>
  <div
    class="flex fullscreen-on-nav container mx-auto justify-center items-center"
  >
    <div class="h-5/6 container text-center mx-auto max-w-2xl">
      <LoggedIn
        v-if="isUserLoggedIn && !weatherLoaded"
        :user-name="userName"
        :user-github="userGithub"
        :display-weather="displayWeather"
      />
      <Weather
        v-if="isUserLoggedIn && weatherLoaded"
        :reset="reset"
        :weather-data="weatherData"
      />
      <LoggedOut v-if="!isUserLoggedIn" />
    </div>
  </div>
</template>

<style scoped>
.fullscreen-on-nav {
  height: calc(100vh - 5rem);
}
</style>
