<script lang="ts" setup>
import SearchForm from "@/components/SearchForm.vue";

defineProps<{
  userName: string;
  userGithub: string;
}>();
</script>

<template>
  <div class="max-w-md mx-auto">
    <p class="py-2">{{ userName }}</p>
    <p class="pt-2 pb-5">{{ userGithub }}</p>
    <SearchForm />
    <button
      type="button"
      class="px-3 py-1 hover:bg-gray-300 rounded-sm outline outline-2 outline-black"
    >
      Display Weather
    </button>
  </div>
</template>
