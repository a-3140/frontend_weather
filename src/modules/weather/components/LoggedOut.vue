<script lang="ts" setup>
import { useUser } from "@/store/user";
const { login } = useUser();
</script>

<template>
  <div class="container mx-auto text-left">
    <p class="py-4">
      Welcome to the weather forecast web application. Please login with your
      Github user to use the application and view the weather in your city.
    </p>
    <button
      @click="login"
      type="button"
      class="px-3 mt-3 py-1 hover:bg-gray-300 rounded-sm outline outline-2 outline-black"
    >
      Login
    </button>
  </div>
</template>
