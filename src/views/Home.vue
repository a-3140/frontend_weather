<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuth0 } from "@auth0/auth0-vue";
import { useWeather } from "@/modules/weather/store/weather";
import Weather from "@/modules/weather/components/Weather.vue";
import LoggedIn from "@/modules/weather/components/LoggedIn.vue";
import LoggedOut from "@/modules/weather/components/LoggedOut.vue";

const { loginWithRedirect, user, isAuthenticated } = useAuth0();

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
        v-if="isAuthenticated && !weatherLoaded"
        :user="user"
        :display-weather="displayWeather"
      />
      <Weather
        v-if="isAuthenticated && weatherLoaded"
        :reset="reset"
        :weather-data="weatherData"
      />
      <LoggedOut v-if="!isAuthenticated" :login="loginWithRedirect" />
    </div>
  </div>
</template>

<style scoped>
.fullscreen-on-nav {
  height: calc(100vh - 5rem);
}
</style>
