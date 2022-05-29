<script setup lang="ts">
import logo from "@/assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-vue";

const { logout, isAuthenticated } = useAuth0();
const handleLogout = () => {
  logout({ returnTo: window.location.origin });
};
</script>

<template>
  <nav class="text-white w-screen h-20 border-2 border-b-black">
    <div class="container mx-auto flex justify-between items-center h-full">
      <router-link :to="{ name: 'Home' }" class="flex h-full items-center">
        <img
          alt="Weather Forecast Logo"
          :src="logo"
          class="px-3 h-10 sm:h-12 md:h-14"
        />
        <div
          class="px-3 text-xl capitalize text-black"
          :class="isAuthenticated ? 'hidden sm:block' : ''"
        >
          weather forecast
        </div>
      </router-link>
      <div>
        <button
          @click="handleLogout"
          type="button"
          class="px-3 py-2 hover:bg-gray-300 text-black rounded-md outline outline-1 outline-black"
          v-if="isAuthenticated"
        >
          Log out
        </button>
      </div>
    </div>
  </nav>
</template>
