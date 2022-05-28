<script setup lang="ts">
import { useUser } from "@/store/user";
import { storeToRefs } from "pinia";
import LoggedIn from "@/modules/weather/components/LoggedIn.vue";
import LoggedOut from "@/modules/weather/components/LoggedOut.vue";

const { isUserLoggedIn, userName, userGithub } = storeToRefs(useUser());
</script>
<template>
  <div
    class="flex fullscreen-on-nav container mx-auto justify-center items-center"
  >
    <div class="h-5/6 container text-center mx-auto max-w-xl">
      <LoggedIn
        v-if="isUserLoggedIn"
        :user-name="userName"
        :user-github="userGithub"
      />
      <LoggedOut v-else />
    </div>
  </div>
</template>

<style scoped>
.fullscreen-on-nav {
  height: calc(100vh - 5rem);
}
</style>
