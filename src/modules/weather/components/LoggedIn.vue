<script lang="ts" setup>
const props = defineProps<{
  userName: string;
  userGithub: string;
}>();
</script>

<template>
  <div>
    <p class="py-2">{{ userName }}</p>
    <p class="pt-2 pb-5">{{ userGithub }}</p>
    <div class="py-5">Search should be here</div>
    <button
      type="button"
      class="px-3 py-1 hover:bg-gray-300 rounded-sm outline outline-2 outline-black"
    >
      Display Weather
    </button>
  </div>
</template>
