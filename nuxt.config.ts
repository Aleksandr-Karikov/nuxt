import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  css: [
    "~/assets/styles/theme/dark.scss",
    "~/assets/styles/theme/light.scss",
    "~/assets/styles/reset.scss",
    "~/assets/styles/main.scss",
  ],
  components: [
    { path: "~/widgets", extensions: [".vue"], pathPrefix: false },
    { path: "~/shared", extensions: [".vue"], pathPrefix: false },
  ],
});
