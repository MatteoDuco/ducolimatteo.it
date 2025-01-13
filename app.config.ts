export interface NuxtAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    config?: NuxtAppConfig
  }
}

export default defineAppConfig({
  config: {
    name: 'Duco',
    description:
      'My website',

  } as NuxtAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
