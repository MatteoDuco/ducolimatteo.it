<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
  },
})
</script>

<template>
  <!--
      This example requires updating your template:
      ```
      <html class="h-full">
      <body class="h-full">
      ```
    -->
  <main class="grid h-[100dvh] place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-cyan-300">
        {{ $props.error.statusCode }}
      </p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-blue-200 sm:text-7xl">
        {{ $props.error.message }}
      </h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 outline-none bg-gray-700 text-white hover:bg-gray-800">Go back home</a>
        <!--         <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a> -->
      </div>
    </div>
  </main>
</template>
