<script setup lang="ts">
import { defineProps, type FunctionalComponent } from 'vue'

interface Props {
  url?: string
  icon: FunctionalComponent
  title?: string
}

const props = defineProps<Props>()

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
    target="_blank" rel="noopener noreferrer" href="#"
    class="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 outline-none cursor-pointer inline-flex items-center justify-center rounded-full bg-gray-700 text-white transition-colors duration-300 hover:bg-gray-800 px-3 py-1"
    @click.prevent="handleClick"
  >
    <component :is="icon" class="w-5 h-5 mr-2" />
    <p v-html="title" />
  </a>
</template>
