// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "Palazzina creativa Brief",
      meta: [{ name: "description", content: "Speriamo mi prendano" }],
      htmlAttrs: {
        lang: "it",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
