// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ["@hypernym/nuxt-gsap"],
  gsap: {
    // composables: true,
    extraPlugins: {
      scrollTrigger: true,
      flip: true,
    },
  },

  // auto import components

  components: {
    dirs: [
      {
        path: "~/components/pages",
        global: true,
      },
      {
        path: "~/components/blocks",
        global: true,
      },
      {
        path: "~/components/ui",
        global: true,
      },
      "~/components",
    ],
  },
});
