<script setup lang="ts">
import { defineProps, type FunctionalComponent } from 'vue'

interface Props {
  url?: string
  icon: FunctionalComponent
  title?: string
}

const props = defineProps<Props>()

// navigateTo(url, { external: true, open: { windowFeatures: { popup: false, noopener: true, noreferrer: true }, target: '_blank' } })
function handleClick() {
  if (props.url) {
    navigateTo(props.url, {
      external: true,
      open: {
        windowFeatures: {
          popup: false,
          noopener: true,
          noreferrer: true,
        },
        target: '_blank',
      },
    })
  }
}
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    class="cursor-pointer inline-flex items-center justify-center rounded-full bg-gray-700 text-white transition-colors duration-300 hover:bg-gray-800 px-3 py-1"
    @click="handleClick"
  >
    <component :is="icon" class="w-5 h-5 mr-2" />
    <p v-html="title" />
  </a>
</template>
