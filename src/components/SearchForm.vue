<script setup lang="ts">
import search from "@/assets/icons/search.svg";
</script>
<template>
  <form class="py-5">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <img alt="search city" :src="search" class="h-5 w-5 text-gray" />
      </div>
      <input
        type="search"
        id="default-search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="City"
        required
      />
    </div>
  </form>
</template>
