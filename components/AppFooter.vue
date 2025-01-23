<script lang="ts">
export default {
  data() {
    return {
      footerClick: false,
    }
  },
}
</script>

<template>
  <footer class=" text-cyan-900 ">
    <div class="py-4 fixed bottom-0 left-0 w-full flex items-center justify-between">
      <div class="mx-2 px-2 xl:mx-16 xl:px-4 xt-left">
        <p class=" text-xs xl:text-sm">
          &copy; {{ new Date().getFullYear() }} Matteo Ducoli. All rights reserved.
        </p>
      </div>
      <div class="mx-2 px-2 xl:mx-16 xl:px-4 text-right">
        <p class="text-xs xl:text-sm">
          3d model by Alec Pike via The Model Resource, Material Template by
          <a @click="footerClick = !footerClick">
            {{ footerClick ? 'me' : 'it\'s a me, Matto' }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
