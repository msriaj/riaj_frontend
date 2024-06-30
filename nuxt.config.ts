// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            ' @use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/_colors.scss" as *; @use "@/assets/scss/_mixins.scss" as *;  @use "@/assets/scss/_fonts.scss" as *;',
        },
      },
    },
  },

  build: {
    transpile: ["gsap"],
  },

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
