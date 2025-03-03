export default defineNuxtConfig({
  devtools: { enabled: true },
  eslint: { config: { standalone: false } },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' },
      ],
    },
  },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxtjs/tailwindcss'],

  ssr: false,
  compatibilityDate: '2025-01-26',
})
