export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'base_diary_nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api",
    // "~/plugins/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
  },
  privateRuntimeConfig: {},

  axios: {
    baseURL: process.env.API_BASE_URL
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/token/', method: 'post', propertyName: 'access' },
          logout: false,  // ログアウト用のエンドポイント
          user: false     // user情報を取得するためのエンドポイント
        }
      }
    }
  }
}
