<script lang="ts" setup>
const { config } = useAppConfig()

useHead({
  title: config.name,
  titleTemplate: `%s - ${config.name}`,
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  background: #111827;
}
</style>
