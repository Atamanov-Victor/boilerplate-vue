// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Head
  app: {
    pageTransition: { name: 'fade' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        // { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
    }
  },

  // Dir
  srcDir: './src/',

  // SSR
  ssr: false,

  // Modules Build
  modules: [
    './src/modules/legacylib',
    '@pinia/nuxt'
  ],

  // Components
  components: true,

  // Plugins
  plugins: [
    '@/plugins/fetch.ts',
    '@/plugins/i18n.ts',
    '@/plugins/scroll'
  ],

  // CSS
  css: [
    '@/assets/font/stolzl/index.css',
    '@/assets/index.scss'
  ],

  // ENV
  runtimeConfig: {
    public: {
      backend: 'https://pasteaddress.com',
      token: 'pastetoken',
    }
  },
})
