<script setup lang="ts">
useSeoMeta({
  // should be page
  title: 'Matteo Ducoli',
  ogTitle: 'Matteo Ducoli',
  twitterTitle: 'Matteo Ducoli',
  description: 'Matteo Ducoli, full stack developer and software engineer',
  ogDescription: 'Matteo Ducoli, full stack developer and software engineer',
  twitterDescription: 'Matteo Ducoli, full stack developer and software engineer',
  ogUrl: 'https://ducolimatteo.it',
  ogImage: {
    url: 'https://ducolimatteo.it/og-image.jpeg',
    width: 800,
    height: 800,
    alt: 'Matteo Ducoli',
  },
  ogImageType: 'image/jpeg',
  ogImageSecureUrl: 'https://ducolimatteo.it/og-image.jpeg',
  ogImageWidth: 800,
  ogImageHeight: 800,
  twitterImage: {
    url: 'https://ducolimatteo.it/og-image.jpeg',
    width: 800,
    height: 800,
    alt: 'Matteo Ducoli',
  },
  // global
  ogLocale: 'en_US',
  ogType: 'website',
  ogSiteName: 'Matteo Ducoli',
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
