<script lang="ts" setup>
import SearchForm from "@/components/SearchForm.vue";
import { User } from "auth0";

defineProps<{
  user: User;
  displayWeather: () => {};
}>();
</script>

<template>
  <div class="max-w-md mx-auto">
    <p class="py-2">{{ user.nickname }}</p>
    <p class="py-2">github.com/{{ user.nickname }}</p>
    <!-- <p class="pt-2 pb-5">{{ userGithub }}</p> -->
    <SearchForm />
    <button
      type="button"
      class="px-3 py-1 hover:bg-gray-300 rounded-sm outline outline-2 outline-black"
      @click="displayWeather"
    >
      Display Weather
    </button>
  </div>
</template>
