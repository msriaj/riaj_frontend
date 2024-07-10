// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

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

  runtimeConfig: {
    apiBase: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
    public: {
      apiBase: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
      staticHost: process.env.VUE_APP_DEVHOST || "http://localhost:8000",
      siteUrl: process.env.VUE_APP_FRONTEND || "http://localhost:3000",
    },
    jwtSecret: process.env.VUE_APP_JWT_SECRET,
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

  modules: ["@nuxt/image"],
});
