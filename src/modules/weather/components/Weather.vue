<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const smAndLarger = breakpoints.greater("sm");
defineProps<{
  reset: () => void;
  weatherData: {
    date: string;
    temp: number;
    main: string;
    pressure: number;
    humidity: number;
    description: string;
  };
}>();
</script>

<template>
  <div class="flex flex-col w-full container px-5">
    <div class="relative sm:rounded-lg mx-auto">
      <table class="text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Date (mm/dd/yyyy)</th>
            <th scope="col" class="px-6 py-3">Temp (F)</th>
            <template v-if="smAndLarger">
              <th scope="col" class="px-6 py-3">Description</th>
              <th scope="col" class="px-6 py-3">Main</th>
              <th scope="col" class="px-6 py-3">Pressure</th>
              <th scope="col" class="px-6 py-3">Humidity</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b odd:bg-white even:bg-gray-50">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ weatherData.date }}
            </th>
            <td class="px-6 py-4">{{ weatherData.temp }}</td>
            <template v-if="smAndLarger">
              <td class="px-6 py-4">
                {{ weatherData.description }}
              </td>
              <td class="px-6 py-4">
                {{ weatherData.main }}
              </td>
              <td class="px-6 py-4">
                {{ weatherData.pressure }}
              </td>
              <td class="px-6 py-4">
                {{ weatherData.humidity }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-right">
      <button
        type="button"
        @click="reset"
        class="px-3 my-10 hover:bg-gray-300 rounded-sm outline outline-2 outline-black"
      >
        Back
      </button>
    </div>
  </div>
</template>
