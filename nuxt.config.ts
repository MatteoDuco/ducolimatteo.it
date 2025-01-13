export default defineNuxtConfig({
  devtools: { enabled: true },
  eslint: { config: { standalone: false } },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
  ],

  ssr: false,
  compatibilityDate: '2025-01-26',
})
