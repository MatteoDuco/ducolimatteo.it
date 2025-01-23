<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
    icon: {
      type: [String, Object],
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
}
</script>

<template>
  <a target="_blank" rel="noopener noreferrer"
    class="cursor-pointer inline-flex items-center justify-center rounded-full bg-gray-700 text-white transition-colors duration-300 hover:bg-gray-800 px-3 py-1"
    @click="url ? navigateTo(url, { external: true, open: { windowFeatures: { popup: false, noopener: true, noreferrer: true }, target: '_blank' } }) : null">
    <component :is="icon" class="w-5 h-5 mr-2" />
    <p v-html="title" />
  </a>
</template>
