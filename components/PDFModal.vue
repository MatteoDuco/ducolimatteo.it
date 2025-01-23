<script lang="ts">
export default {
  props: {
    pdfUrl: {
      type: String,
      required: true,
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
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    openModal() {
      this.isOpen = true
    },
  },
}
</script>

<template>
  <LinkBadge is-modal :icon="icon" title="CV" @click="openModal" />
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">
          My CV
        </h2>
        <button class="text-gray-500 hover:text-gray-700" @click="closeModal">
          <span class="text-2xl">&times;</span>
        </button>
      </div>
      <iframe :src="`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`" class="w-full h-[70vh] border-none" frameborder="0" />
    </div>
  </div>
</template>
