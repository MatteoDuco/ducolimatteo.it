<script setup lang="ts">
import { getAnalytics, isSupported } from 'firebase/analytics'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDm71p_QTWStpybBvepRAZZtdPii-H_1qM',
  authDomain: 'ducolimatteo-it.firebaseapp.com',
  projectId: 'ducolimatteo-it',
  storageBucket: 'ducolimatteo-it.firebasestorage.app',
  messagingSenderId: '137312335086',
  appId: '1:137312335086:web:acf01a994162e2b32d6fff',
  measurementId: 'G-Y5XGYZXTDR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const _analytics = await isSupported() ? getAnalytics(app) : null

useSeoMeta({
  title: 'Matteo Ducoli',
  ogTitle: 'Matteo Ducoli',
  twitterTitle: 'Matteo Ducoli',
  description: 'Matteo Ducoli, full stack developer and software engineer',
  ogDescription: 'Matteo Ducoli, full stack developer and software engineer',
  twitterDescription: 'Matteo Ducoli, full stack developer and software engineer',
  ogUrl: () => `${process.env.BASE_URL}`,
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
