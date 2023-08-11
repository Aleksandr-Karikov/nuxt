
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },
  css: ['~/assets/styles/theme/dark.scss', '~/assets/styles/theme/light.scss', '~/assets/styles/reset.scss', '~/assets/styles/main.scss'],
  components: [
    { path: '~/widgets',extensions: ['.vue'],  pathPrefix: false,},
    { path: '~/shared',extensions: ['.vue'], pathPrefix: false, },
  ]
})
